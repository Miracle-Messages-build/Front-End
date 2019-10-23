import React, { useState } from 'react';
import axios from 'axios';
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

  textarea {
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

const AddCase = props => {
  const [inputs, setInputs] = useState({
    socialCaseFname: 'Yeet',
    socialCaseLname: 'Yeeterson',
    socialCaseAge: '22',
    socialCaseFamilyLastKnownLocation: 'Yeet Town',
    socialCaseContactInfo: 'yeet@yeetmail.com',
    socialCaseNotes: 'Likes to yeet',
    // socialCaseHometown: 'placeholder',
    // socialCaseCurrentTown: 'placeholder',
    // socialCaseIsSensitive: false,
    // socialCaseFamilyFName: 'placeholder',
    // socialCaseFamilyLName: 'placeholder',
    // socialCaseFamilyAge: 'placeholder',
    // socialCaseFamilyRelationship: 'placeholder',
    // socialCaseFamilyNotes: 'placeholder',
    // user: "id"
  });

  const handleChange = e => {
    e.persist();
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const submitForm = e => {
    e.preventDefault();
    console.log('Sending POST:', inputs);
    axios.post('https://lindseyacason-miraclemessages.herokuapp.com/socialCases/socialCases/add', inputs)
      .then(response => console.log('POST Response:', response))
      .catch(err => console.log('POST Error:', err));
  }

  return (
    <FormContainer>
      <FormHeader>Add Lost Family Member</FormHeader>
      <Form onSubmit={e => { props.history.push('/public'); submitForm(e); }}>
        <label htmlFor="socialCaseFname">
          First Name
          <input type="text" name="socialCaseFname" value={inputs.socialCaseFname} onChange={handleChange} placeholder="First Name" required />
        </label>
        <label htmlFor="socialCaseLname">
          Last Name
          <input type="text" name="socialCaseLname" value={inputs.socialCaseLname} onChange={handleChange} placeholder="Last Name" required />
        </label>
        <label htmlFor="socialCaseAge">
          Age
          <input type="number" name="socialCaseAge" value={inputs.socialCaseAge} onChange={handleChange} min="16" max="100" placeholder="Age" required />
        </label>
        <label htmlFor="socialCaseFamilyLastKnownLocation">
          Last Known Location
          <input type="text" name="socialCaseFamilyLastKnownLocation" value={inputs.socialCaseFamilyLastKnownLocation} onChange={handleChange} placeholder="City, State" required />
        </label>
        <label htmlFor="socialCaseContactInfo">
          Contact Info
          <input type="text" name="socialCaseContactInfo" value={inputs.socialCaseContactInfo} onChange={handleChange} placeholder="Phone # or Address" required />
        </label>
        <label htmlFor="socialCaseNotes">
          Extra Details
          <textarea name="socialCaseNotes" value={inputs.socialCaseNotes} onChange={handleChange} placeholder="Other family members, friends, last known job, etc" required />
        </label>
        <button type="submit">Create Post</button>
      </Form>
    </FormContainer>
  )
}

export default AddCase;
