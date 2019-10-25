import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth.js'
import styled from 'styled-components';

import ErrorModal from './ErrorModal';


const FormContainer = styled.div`
  margin-top: 5%;
  width: 20%;
  box-shadow: 0 0 2px 1px rgb(100, 100, 100, 0.5);
`;

const FormHeader = styled.h1`
  font-size: 2.2rem;
  color: black;
  padding: 4%;
  text-align: center;
  background-color: cornflowerblue;
`;

const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 2%;
  background-color: whitesmoke;

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
`;


const initialInfo = {

  socialCaseFname: '',
  socialCaseLname: '',
  socialCaseAge: '',
  socialCaseHometown: '',
  socialCaseCurrentTown: '',
  socialCaseFamilyRelationship: '',
  socialCaseFamilyFName: '',
  socialCaseFamilyLName: '',
  socialCaseFamilyLastKnownLocation: '',
  socialCaseNotes: ''

};






const UpdateForm = props => {
  console.log(props, 'props in update')
  const [info, setInfo] = useState(initialInfo);

  const [error, setError] = useState({ isActive: false, msg: '' });

  const notesMaxChars = 150;

  useEffect(() => {
    const caseToEdit = props.caseInfo.find(
      data => `${data.socialCaseId}` === props.match.params.id
    );
    if (caseToEdit) setInfo(caseToEdit);
  }, [props.caseInfo, props.match.params.id])

  const handleChange = event => {
    if (event.target.name === 'socialCaseNotes') {
      if (event.target.value.length > notesMaxChars) {
        return;
      }
    }
    event.persist();
    setInfo({
      ...info,
      [event.target.name]: event.target.value

    })
  }

  const handleLogin = event => {
    event.preventDefault();

    if (info.socialCaseFname.length < 2 || info.socialCaseFamilyFName.length < 2) {
      setError({ isActive: true, msg: 'First name cannot be less than two characters.' });
      return;
    }

    if (info.socialCaseLname.length < 2 || info.socialCaseFamilyLName.length < 2) {
      setError({ isActive: true, msg: 'Last name cannot be less than two characters.' });
      return;
    }

    if (info.socialCaseHometown.length < 4) {
      setError({ isActive: true, msg: 'Home town cannot be less than four characters.' });
      return;
    }
    if (info.socialCaseCurrentTown.length < 4) {
      setError({ isActive: true, msg: 'Current town must not be less than four characters.' });
      return;
    }

    if (info.socialCaseContactInfo.length < 4) {
      setError({ isActive: true, msg: 'Contact info cannot be less than four characters.' });
      return;
    }

    if (info.socialCaseFamilyLastKnownLocation.length < 4) {
      setError({ isActive: true, msg: 'Last known location cannot be less than four characters.' });
      return;
    }

    axiosWithAuth()
      .put(`https://lindseyacason-miraclemessages.herokuapp.com/socialCases/socialCase/${props.match.params.id}`, info)
      // .then(response => console.log(response))
      .then(response => {
        props.setCaseInfo([...props.caseInfo, response.data])
        props.history.push('/dashboard')
        window.location.reload();
      })
      .catch(err => console.log(err))


  }

  return (





    <div className="edit-parent">
      {error.isActive ? <ErrorModal error={error.msg} setError={setError} /> : null}
      <FormContainer>
        <FormHeader>Edit Form</FormHeader>

        <Form className="signup-form" onSubmit={e => { handleLogin(e) }}>

          <input
            type="text"
            name="socialCaseFname"
            value={info.socialCaseFname}
            onChange={handleChange}
            placeholder={info.socialCaseFname}
          />
          <input
            type="text"
            name="socialCaseLname"
            value={info.socialCaseLname}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <input
            type="text"
            name="socialCaseAge"
            value={info.socialCaseAge}
            onChange={handleChange}
            placeholder="Age"
          />
          <input
            type="text"
            name="socialCaseHometown"
            value={info.socialCaseHometown}
            onChange={handleChange}
            placeholder="Hometown"
          />
          <input
            type="text"
            name="socialCaseCurrentTown"
            value={info.socialCaseCurrentTown}
            onChange={handleChange}
            placeholder="Current Town"
          />
          <input
            type="text"
            name="socialCaseContactInfo"
            value={info.socialCaseContactInfo}
            onChange={handleChange}
            placeholder="Contact"
          />
          <input
            type="text"
            name="socialCaseFamilyRelationship"
            value={info.socialCaseFamilyRelationship}
            onChange={handleChange}
            placeholder="Relationship"
          />
          <input
            type="text"
            name="socialCaseFamilyFName"
            value={info.socialCaseFamilyFName}
            onChange={handleChange}
            placeholder="Family first name"
          />
          <input
            type="text"
            name="socialCaseFamilyLName"
            value={info.socialCaseFamilyLName}
            onChange={handleChange}
            placeholder="Family last name"
          />
          <input
            type="text"
            name="socialCaseFamilyLastKnownLocation"
            value={info.socialCaseFamilyLastKnownLocation}
            onChange={handleChange}
            placeholder="Last known location"
          />
          <input
            type="text"
            name="socialCaseNotes"
            value={info.socialCaseNotes}
            onChange={handleChange}
            placeholder="Notes"
          />



          <button>Edit</button>


        </Form>
      </FormContainer>
    </div>
  )
}

export default UpdateForm;