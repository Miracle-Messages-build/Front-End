import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth.js'


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
  socialCaseFamilyNotes: ''

};






const UpdateForm = props => {
  // console.log(props, 'props in update')
  const [info, setInfo] = useState(initialInfo);


  useEffect(() => {
    const caseToEdit = props.caseInfo.find(
      data => `${data.id}` === props.match.params.id
    );
    if (caseToEdit) setInfo(caseToEdit);
  }, [props.caseInfo, props.match.params.id])

  const handleChange = event => {
    event.persist();
    setInfo({
      ...info,
      [event.target.name]: event.target.value

    })
  }

  const handleLogin = event => {
    event.preventDefault();

    axiosWithAuth()
      .put(`https://lindseyacason-miraclemessages.herokuapp.com/socialCases/socialCase/${props.match.params.id}`, info)
      .then(response => console.log(response))
      // .then(response => {
      //     props.setCaseInfo([...props.caseInfo, response.data])
      //     // props.history.push('/')
      // })
      .catch(err => console.log(err))


  }

  return (





    <>
      <form className="signup-form" onSubmit={e => { props.history.push('/viewallcases'); handleLogin(e) }}>
        <h1>Update</h1>
        <input
          type="text"
          name="socialCaseFname"
          value={info.socialCaseFname}
          onChange={handleChange}
          placeholder="First Name"
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
          name="socialCaseFamilyNotes"
          value={info.socialCaseFamilyNotes}
          onChange={handleChange}
          placeholder="Notes"
        />



        <button>Edit</button>


      </form>
    </>
  )
}

export default UpdateForm;