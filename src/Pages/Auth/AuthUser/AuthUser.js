import axios from "axios";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const AuthUser = () => {
   

    const navigate = useNavigate();

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () => {
        const userString = sessionStorage.getItem('access_token');
        const userDetails = JSON.parse(jwt_decode(userString));
        return userDetails;
    }

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());

    // const saveToken = (user, token) => {
    //     sessionStorage.setItem('token', JSON.stringify(token));
    //     sessionStorage.setItem('user', JSON.stringify(user));

    //     setToken(token);
    //     setUser(user);

    //     // navigate('/dashboard');
    // }

    const logout = () => {
        sessionStorage.clear();
        navigate("/login");
    }


    const http = axios.create({
        baseURL: "https://base.sagacitiai.com/base/public/api",
        headers: {
            'content-type': 'application/json',
            "Authorization": `Bearer ${token}`
        }
    });
    return { 
        token,
        user, 
        http,
        logout
    }
}