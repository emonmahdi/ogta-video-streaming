import axios from "axios";
import {useState} from "react";
import jwt_decode from "jwt-decode";
import {useNavigate} from "react-router-dom";

export const AuthUser = () => {


    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();  
        navigate("/login");
        window.location.reload();
    }

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        if (!tokenString) {
            return;
        }
        const token = JSON.parse(tokenString);
        if (token.exp * 100000000000 < Date.now()){
            logout();
        }
        return token;
    }

    const getUser = () => {
        const userString = localStorage.getItem('access_token');
        if (!userString) {
            return ;
        }
        const jwt =  jwt_decode(userString);
        if (jwt.exp * 1000000000000 < Date.now()){
            logout();
        }
        return jwt;
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

   


    // const http = axios.create({
    //     baseURL: "https://base.sagacitiai.com/base/public/api",
    //     headers: {
    //         'content-type': 'application/json',
    //         "Authorization": `Bearer ${token}`
    //     }
    // });
    return {
        token,
        user,
        logout
    }
}