import React, { useState } from "react";
import axios from 'axios'

const SignUp = (props) => {
  // console.log (props,"in signup")
  // {
  //     "password": "string",
  //     "primaryemail": "string",
  //     "username": "string"
  //   }

  const credentials = {
    username: '',
    primaryemail: '',
    password: ''
  }

  const [signUp, setSignUp] = useState(credentials)

  const handleChange = event => {
    event.persist()
    setSignUp({
      ...signUp,
      [event.target.name]: event.target.value
    });

  }

  const handleLogin = event => {
    event.preventDefault();

    axios
      .post('https://lindseyacason-miraclemessages.herokuapp.com/createnewuser', signUp)
      .then(response => {
        console.log(response.data, "sign up")

        //  .then(response => {
        //     localStorage.setItem('token', response.data.payload);
        props.history.push('/login')
      })
      .catch(err => console.log(err.response));



  }

  return (
    <>
      <form className="signup-form" onSubmit={handleLogin}>
        <h1>Sign up</h1>
        <input
          type="text"
          name="username"
          value={signUp.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={signUp.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="text"
          name="primaryemail"
          value={signUp.primaryemail}
          onChange={handleChange}
          placeholder="Primary Email"
        />
        <button>Sign up</button>


      </form>
    </>
  );
};

export default SignUp;
