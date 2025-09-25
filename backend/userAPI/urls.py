from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', UserRegistrationAPIView.as_view(), name="Register-user"),
    path('login/', UserLoginAPIView.as_view(), name='User-login'),
    path('logout/',LogoutView.as_view(), name="logout user"),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('user/', UserInfoAPIView.as_view(), name='user info'),

    path('tasks/', TaskCreateView.as_view(), name='task-list-create'),
]