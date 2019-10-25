import React, { useState } from 'react';
import styled from 'styled-components';

import { fetchCase, editCase, addCase } from '../../actions/index.js'
import { connect } from 'react-redux';

import ErrorModal from '../ErrorModal';

const FormContainer = styled.div`
  margin-top: 2%; 
  width: 50%;
  box-shadow: 0 0 2px 1px rgb(100, 100, 100, 0.5);

  @media (max-width: 800px){
    width: 95%;
  }
`;

const FormHeader = styled.h1`
  font-size: 2.2rem;
  color: black;
  padding: 2%;
  text-align: center;
  background-color: cornflowerblue;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2%;
  background-color: whitesmoke;

  label {
    width: 100%;
  }

  input{
    width: 100%;
    padding: 2%;
    margin: 3% auto;
  }

  textarea {
    width: 100%;
    padding: 2%;
    margin: 3% auto;
  }

  button {
    width: 50%;
    height: 40px;
    margin: 2% auto;
  }
`;

const FormMain = styled.div`
  display: flex;

  @media (max-width: 578px){
    flex-direction: column;
  }
`;

const FormSection = styled.div`
  width: 50%;
  padding: 1%;
  border-bottom: 1px solid black;

 
  @media (max-width: 578px){
    width: 100%;
  }

  :first-child{
    border-right: 1px solid black;

    @media (max-width: 578px){
      border-right: none;
    }
  }
`;

const VolunteerAddCase = (props) => {
  const [inputs, setInputs] = useState({
    socialCaseFname: '',
    socialCaseLname: '',
    socialCaseAge: '',
    socialCaseHometown: '',
    socialCaseCurrentTown: '',
    socialCaseContactInfo: '',
    socialCaseIsSensitive: '',

    socialCaseFamilyFName: '',
    socialCaseFamilyLName: '',
    socialCaseFamilyAge: '',
    socialCaseFamilyRelationship: '',
    socialCaseFamilyLastKnownLocation: '',
    socialCaseNotes: ''
  });

  const [error, setError] = useState({ isActive: false, msg: '' });

  const notesMaxChars = 150;

  const handleChange = e => {
    if (e.target.name === 'socialCaseNotes') {
      if (e.target.value.length > notesMaxChars) {
        return;
      }
    }
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setInputs({ ...inputs, [e.target.name]: value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (inputs.socialCaseFname.length < 2 || inputs.socialCaseFamilyFName.length < 2) {
      setError({ isActive: true, msg: 'First name cannot be less than two characters.' });
      return;
    }

    if (inputs.socialCaseLname.length < 2 || inputs.socialCaseFamilyLName.length < 2) {
      setError({ isActive: true, msg: 'Last name cannot be less than two characters.' });
      return;
    }

    if (inputs.socialCaseHometown.length < 4) {
      setError({ isActive: true, msg: 'Home town cannot be less than four characters.' });
      return;
    }
    if (inputs.socialCaseCurrentTown.length < 4) {
      setError({ isActive: true, msg: 'Current town must not be less than four characters.' });
      return;
    }

    if (inputs.socialCaseContactInfo.length < 4) {
      setError({ isActive: true, msg: 'Contact info cannot be less than four characters.' });
      return;
    }

    if (inputs.socialCaseFamilyLastKnownLocation.length < 4) {
      setError({ isActive: true, msg: 'Last known location cannot be less than four characters.' });
      return;
    }
    props.history.push('/dashboard'); 
    props.addCase(inputs);
  }

  return (
    <FormContainer>
      {error.isActive ? <ErrorModal error={error.msg} setError={setError} /> : null}
      <FormHeader>Add a case</FormHeader>
      <Form>
        <FormMain>
          <FormSection>
            <label htmlFor="socialCaseFname">
              Homeless Person's Name
            <input type="text" name="socialCaseFname" id="socialCaseFname" value={inputs.socialCaseFname} onChange={handleChange} placeholder="First Name" required />
            </label>
            <label htmlFor="socialCaseLname">
              Last Name
            <input type="text" name="socialCaseLname" id="socialCaseLname" value={inputs.socialCaseLname} onChange={handleChange} placeholder="Last Name" required />
            </label>
            <label htmlFor="socialCaseAge">
              Age
            <input type="text" name="socialCaseAge" id="socialCaseAge" value={inputs.socialCaseAge} onChange={handleChange} placeholder="Age" required />
            </label>
            <label htmlFor="socialCaseHometown">
              Home Town
            <input type="text" name="socialCaseHometown" id="socialCaseHometown" value={inputs.socialCaseHometown} onChange={handleChange} placeholder="City" required />
            </label>
            <label htmlFor="socialCaseCurrentTown">
              Current City
            <input type="text" name="socialCaseCurrentTown" id="socialCaseCurrentTown" value={inputs.socialCaseCurrentTown} onChange={handleChange} placeholder="City" required />
            </label>
            <label htmlFor="socialCaseContactInfo">
              Contact Info
            <input type="text" name="socialCaseContactInfo" id="socialCaseContactInfo" value={inputs.socialCaseContactInfo} onChange={handleChange} placeholder="Phone # or Address" required />
            </label>
            <label htmlFor="socialCaseIsSensitive">
              Is Case Sensitive?
              <input type="checkbox" name="socialCaseIsSensitive" id="socialCaseIsSensitive" checked={inputs.socialCaseIsSensitive} onChange={handleChange} />
            </label>
          </FormSection>
          <FormSection>
            <label htmlFor="socialCaseFamilyFName">
              Friend or Family Member's Name
            <input type="text" name="socialCaseFamilyFName" id="socialCaseFamilyFName" value={inputs.socialCaseFamilyFName} onChange={handleChange} placeholder="First Name" required />
            </label>
            <label htmlFor="socialCaseFamilyLName">
              Last Name
            <input type="text" name="socialCaseFamilyLName" id="socialCaseFamilyLName" value={inputs.socialCaseFamilyLName} onChange={handleChange} placeholder="Last Name" required />
            </label>
            <label htmlFor="socialCaseFamilyAge">
              Age
            <input type="text" name="socialCaseFamilyAge" id="socialCaseFamilyAge" value={inputs.socialCaseFamilyAge} onChange={handleChange} placeholder="Age" required />
            </label>
            <label htmlFor="socialCaseFamilyRelationship">
              Relationship
            <input type="text" name="socialCaseFamilyRelationship" id="socialCaseFamilyRelationship" value={inputs.socialCaseFamilyRelationship} onChange={handleChange} placeholder="Relative" required />
            </label>
            <label htmlFor="socialCaseFamilyLastKnownLocation">
              Last Known Location
            <input type="text" name="socialCaseFamilyLastKnownLocation" id="socialCaseFamilyLastKnownLocation" value={inputs.socialCaseFamilyLastKnownLocation} onChange={handleChange} placeholder="City" required />
            </label>
            <label htmlFor="socialCaseNotes">
              Extra Details (Characters remaining: {notesMaxChars - inputs.socialCaseNotes.length})
          <textarea name="socialCaseNotes" id="socialCaseNotes" value={inputs.socialCaseNotes} onChange={handleChange} placeholder="Other family members, friends, last known job, etc" />
            </label>
          </FormSection>
        </FormMain>
        <button onClick={e => { handleSubmit(e); }}>Add</button>
      </Form>
    </FormContainer>
  )
}

const mapStateToProps = state => {
  return {
    cases: state.cases,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchCase, editCase, addCase })(VolunteerAddCase);