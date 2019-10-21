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

 axios
      .post('', newLogin)
       .then(response => {
          localStorage.setItem('token', response.data.payload);
          props.history.push('/protected')
      })
      .catch(err => console.log(err.response));



}

  return (
    <>
          <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        name="username"
                        value={newLogin.username}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        value={newLogin.password}
                        onChange={handleChange}
                    />
                          <input
                        type="text"
                        name="primaryemail"
                        value={signUp.primaryemail}
                        onChange={handleChange}
                    />
                    <button>Log in</button>


                </form>
    </>
  );
};

export default Login;
