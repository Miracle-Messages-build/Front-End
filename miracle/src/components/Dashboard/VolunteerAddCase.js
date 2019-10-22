import React, { useState } from 'react'
import styled from 'styled-components';

const FormContainer = styled.div`
  margin-top: 2%; 
  width: 50%;
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
  flex-direction: column;

  label {
    width: 100%;
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
    width: 50%;
    height: 40px;
    margin: 2% auto;
  }
`

const FormMain = styled.div`
  display: flex;
`

const FormSection = styled.div`
  width: 50%;
  padding: 1%;
  border-bottom: 1px solid black;

  :first-child{
    border-right: 1px solid black;
  }
`

const VolunteerAddCase = () => {
  const [inputs, setInputs] = useState({
    name: '',
    age: '',
    homeTown: '',
    currentCity: '',
    contact: '',

    familyName: '',
    familyAge: '',
    relationship: '',
    lastKnownLoc: '',
    extraDetails: ''
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
      <FormHeader>Add New Missing Person Case</FormHeader>
      <Form onSubmit={submitForm}>
        <FormMain>

          <FormSection>
            <label htmlFor="name">
              Homeless Name
          <input type="text" name="name" id="name" value={inputs.name} onChange={handleChange} placeholder="Name" required />
            </label>
            <label htmlFor="age">
              Age
          <input type="number" name="age" id="age" value={inputs.age} onChange={handleChange} min="16" max="100" placeholder="Age" required />
            </label>
            <label htmlFor="homeTown">
              Home Town
          <input type="text" name="homeTown" id="homeTown" value={inputs.homeTown} onChange={handleChange} placeholder="City, State" required />
            </label>
            <label htmlFor="currentCity">
              Current City
          <input type="text" name="currentCity" id="currentCity" value={inputs.currentCity} onChange={handleChange} placeholder="City" required />
            </label>
            <label htmlFor="contact">
              Contact Info
          <input type="text" name="contact" id="contact" value={inputs.contact} onChange={handleChange} placeholder="Phone # or Address" required />
            </label>
          </FormSection>
          <FormSection>
            <label htmlFor="familyName">
              Family Member Name
          <input type="text" name="familyName" id="familyName" value={inputs.familyName} onChange={handleChange} placeholder="Name" required />
            </label>
            <label htmlFor="familyAge">
              Age
          <input type="text" name="familyAge" id="familyAge" value={inputs.familyAge} onChange={handleChange} placeholder="Age" required />
            </label>
            <label htmlFor="relationship">
              Relationship
          <input type="text" name="relationship" id="relationship" value={inputs.relationship} onChange={handleChange} placeholder="Relative" required />
            </label>
            <label htmlFor="lastKnownLoc">
              Last Known Location
          <input type="text" name="lastKnownLoc" id="lastKnownLoc" value={inputs.lastKnownLoc} onChange={handleChange} placeholder="City, State" required />
            </label>
            <label htmlFor="extraDetails">
              Extra Details
          <textarea name="extraDetails" id="extraDetails" value={inputs.extraDetails} onChange={handleChange} placeholder="Other family members, friends, last known job, etc" required />
            </label>
          </FormSection>
        </FormMain>
        <button type="submit">Add New Case</button>
      </Form>
    </FormContainer>
  )
}

export default VolunteerAddCase;
