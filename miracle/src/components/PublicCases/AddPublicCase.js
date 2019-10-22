import React, { useState } from 'react'
import styled from 'styled-components';

const FormContainer = styled.div`
  margin-top: 5%; /* NOT FOR PRODUCTION */
  width: 20%;
  box-shadow: 0 0 2px 1px rgb(100, 100, 100, 0.5);
`
const FormHeader = styled.h1`
  font-size: 1.8rem;
  padding: 2%;
  margin: 0;
  text-align: center;
  color: white;
  background-color: dodgerblue;
`

const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 2%;
  

  label {
    width: 100%;
    margin-top: 1%;
  }

  input{
    width: 100%;
    padding: 2%;
    margin: 3% auto;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    height: 30px;
  }
`

const AddCase = () => {
  const [inputs, setInputs] = useState({
    name: '',
    age: '',
    location: '',
    contact: ''
  });

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const submitForm = e => {
    e.preventDefault();
    console.log(inputs);
  }

  return (
    <FormContainer>
      <FormHeader>Add Lost Family Member</FormHeader>
      <Form onSubmit={submitForm}>
        <label htmlFor="name">
          Name
          <input type="text" name="name" id="name" value={inputs.name} onChange={handleChange} placeholder="Name" required />
        </label>
        <label htmlFor="age">
          Age
          <input type="number" name="age" id="age" value={inputs.age} onChange={handleChange} min="16" max="100" placeholder="Age" required />
        </label>
        <label htmlFor="location">
          Last Known Location
          <input type="text" name="location" id="location" value={inputs.location} onChange={handleChange} placeholder="City, State" required />
        </label>
        <label htmlFor="contact">
          Contact Info
          <input type="text" name="contact" id="contact" value={inputs.contact} onChange={handleChange} placeholder="Phone # or Address" required />
        </label>
        <button type="submit">Create Post</button>
      </Form>
    </FormContainer>
  )
}

export default AddCase;
