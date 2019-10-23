import React, { useState } from "react";
import { axiosWithAuthLogin } from '../utils/axiosWithAuth'
import axios from 'axios'


const Login = (props) => {


    const credentials = {
        username: '',
        password: ''
    }

    const [newLogin, setNewLogin] = useState(credentials)

    const handleChange = event => {
        setNewLogin({
            ...newLogin,
            [event.target.name]: event.target.value
        });

    }


    const handleLogin = event => {
        event.preventDefault();

        axiosWithAuthLogin()
            .post('https://lindseyacason-miraclemessages.herokuapp.com/login', `grant_type=password&username=${newLogin.username}&password=${newLogin.password}`)
            // .then(response => console.log(response, "login"))
            .then(response => {
                localStorage.setItem('token', response.data.access_token);
                props.history.push('/signup')

            })
            .catch(err => console.log(err.response));



    }

    
    return (
        <>
            <form className="login-form" onSubmit={handleLogin}>
                <h1>Login</h1>
                <input
                    type="text"
                    name="username"
                    value={newLogin.username}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    value={newLogin.password}
                    onChange={handleChange}
                    placeholder="Password"
                />

                <button>Log in</button>


            </form>
        </>
    );
};

export default Login;
