import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import axios from 'axios'

const Login = (props) => {
 

  const credentials = {
    username:'',
    primaryemail:'',
    password:''
}

const [newLogin, setNewLogin]= useState(credentials)

const handleChange = event => {
  setNewLogin({
    ...newLogin,
    [event.target.name]:event.target.value
  });

}

const handleLogin = event => {
  event.preventDefault();

 axiosWithAuth()
      .post('', newLogin)
       .then(response => {
          localStorage.setItem('token', response.data.payload);
          props.history.push('/protected')
      })
      .catch(err => console.log(err.response));



}

  return (
    <>
          <form className= "login-form" onSubmit={handleLogin}>
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
                          <input
                        type="text"
                        name="primaryemail"
                        value={newLogin.primaryemail}
                        onChange={handleChange}
                        placeholder="Primary Email"
                    />
                    <button>Log in</button>


                </form>
    </>
  );
};

export default Login;
