from rest_framework import serializers
from .models import CustomUser, Task
from django.contrib.auth import authenticate


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email')

class UserRegistrationSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'password1', 'password2')
        extra_kwargs = {"write_only": True}

    def validate(self, attrs):
        if attrs['password1'] != attrs['password2']:
            raise serializers.ValidationError('Passwords dont match!')
        
        password = attrs.get('password1', "")
        if len(password) < 8:
            raise serializers.ValidationError("password must be least 8 characters long!")
        
        return attrs
    
    def create(self, validated_data):
        password = validated_data.pop('password1')
        validated_data.pop('password2')

        return CustomUser.objects.create_user(password=password, **validated_data)
    
class UserLoginSerializer(serializers.Serializer):


    email = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError('Incorrect credentials')
    
class TaskSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Task
        fields = ['id','title', 'description', 'user', 'status', 'due_date', 'created_at', 'updated_at']
        read_only_fields = ['id','user', 'created_at', 'updated_at']