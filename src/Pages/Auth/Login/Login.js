import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import { useEffect, useState } from "react";
import   {useNavigate} from  'react-router-dom';
import axiosInstance from '../Axios/axios';
import jwt_decode from "jwt-decode";


import axios from 'axios';


import './login.css'
import TopNav from '../../../components/TopNav/TopNav';


const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);



    // useEffect(() => {
    //     const existuser = JSON.parse(localStorage.getItem('user')); 

    //     if (existuser) {
    //         setUser(existuser);
    //     }
    //   }, [user]);  

    console.log(user?.user_name)
    console.log(user)
    // new code

    const initialFormData = Object.freeze({
		email: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};


    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance
        .post(`token/obtain/`, {
            email: formData.email,
            password: formData.password,
        })
        .then((res) => {
            localStorage.setItem('access_token', res.data.access);
            localStorage.setItem('refresh_token', res.data.refresh);
            axiosInstance.defaults.headers['Authorization'] =
                'JWT ' + localStorage.getItem('access_token');
            setUser(jwt_decode(res.data.access) );
            // console.log(jwt_decode(res.data.access, { header: true }));
            navigate('/');
            console.log('successful user login');
        });

    }

    return (
        <div className='ogtaRegister'>
                <form onSubmit={handleSubmit} className='registerForm'>
                   <h2 className='mb-5 mt-3'>Log In! OGTA
                   {
                    user?.email ? <span className='text-info ms-5 '>{user?.user_name}</span> : <></>
                   }
                   </h2>
                   <div>
                        <input type="email" id='email' placeholder='Email' className='input' onChange={handleChange} name='email' />
                    </div>
                   <div>
                        <input type="password" id='password' placeholder='Password' className='input' onChange={handleChange} name='password' />
                        <span className='d-block text-end'>Forgot Password</span>
                    </div>
                    <div>
                        <button type="submit"  className='regBtn'>Log In!</button>
                    </div>
                    <div className='socials-login mt-3'>
                         <span>Log In With: </span>
                         <div className='text-center'>
                            <span className='social-icons'><FaIcons.FaFacebookSquare /> </span>
                            <span className='social-icons'><FcIcons.FcGoogle /> </span>
                            <span className='social-icons'><FaIcons.FaLinkedinIn /> </span>
                         </div>
                    </div>
                    <hr />
                    <div className='text-center'>
                        <p>New here!  Register! </p>
                    </div>
                </form>
        </div>
    );
};

export default Login;