import React, { useState } from "react";
import { axiosWithAuthLogin } from '../utils/axiosWithAuth'

import { Link } from 'react-router-dom';
import { MiracleNav } from './MiracleNav';
import styled from 'styled-components';

const Form = styled.form`
  margin: 5% auto;
  width: 15%;
  /* border: 2px solid grey; */
  border-radius: 5px;
  /* font-size: 1.2rem; */
  background:#e5e5e5;
  box-shadow: 5px 1px 20px #111;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 3%;

  h1 {
      font-size: 2.4rem;
      margin-bottom: 2rem;
  }

  a {
    font-size: 1.4rem;
    margin-top: 2rem;
  }

  input {
      margin: .5rem auto;
      width: 100%;
      height: 2.5rem;
  }

  button {
      margin-top: 1rem;
      width: 85%;
      height: 3rem;
  }
`

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
                props.history.push('/dashboard/viewallcases')

            })
            .catch(err =>   {alert("Incorrect username or password")});



    }


    return (
        <>
            <MiracleNav>
                <h1>Miracle Messages</h1>
                <a href="https://bw1-crutledge.netlify.com/index.html">Home</a>
                <Link to="/">View Public Cases</Link>
                <Link to="/signup">Sign up</Link>
            </MiracleNav>
            <Form className="login-form" onSubmit={handleLogin}>
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

                <Link to="/signup">Looking to sign up?</Link>
            </Form>
        </>
    );
};

export default Login;
