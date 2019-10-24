import React, { useState } from "react";
import axios from 'axios'

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

  input {
      margin: .5rem auto;
      width: 100%;
      height: 2.5rem;
  }

  button {
      margin-top: 1rem;
      width: 100%;
      height: 3rem;
  }
`

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
      // .then(response => {
      //   console.log(response.data, "sign up")

      .then(response => {
        // localStorage.setItem('token', response.data.payload);
        props.history.push('/login')
      })
      .catch(err => console.log(err.response));



  }

  return (
    <>
      <MiracleNav>
        <h1>Miracle Messages</h1>
        <a href="https://bw1-crutledge.netlify.com/index.html">Home</a>
        <Link to="/">View Public Cases</Link>
        <Link to="/login">Volunteer Login</Link>
      </MiracleNav>
      <Form className="signup-form" onSubmit={handleLogin}>
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


      </Form>
    </>
  );
};

export default SignUp;
