import {useState, useEffect} from 'react';
import axios from 'axios'

const ManageProfile = ()=> {
    const access = localStorage.getItem('access_token');
    // Need to move the access token import on the parent component,
    // Cant be importing it on every child component, this is not efficient.

    useEffect(()=> {

        const UserDetails = async ()=> {
            const response = await axios.get('http://127.0.0.1:8000/api/user', {
                headers: {
                    Authorization: 'Bearer ' + access
                }
            })
        }
    })

    return (<div className='manage-profile'>
        <span>Manage Profile</span>
    </div>)
}

export default ManageProfile;