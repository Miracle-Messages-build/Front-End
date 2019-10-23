import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth.js'


const initialCase = {
  
 socialCaseFname: '',
    socialCaseLname: '',
    socialCaseAge: '',
    socialCaseHometown: '',
    socialCaseCurrentTown: '',
    socialCaseContactInfo: '',
    socialCaseId:''
    // socialCaseId: '',
    // socialCaseIsSensitive: false,

    // socialCaseFamilyFName: '',
    // socialCaseFamilyLName: '',
    // socialCaseFamilyAge: '',
    // socialCaseFamilyRelationship: '',
    // socialCaseFamilyLastKnownLocation: '',
    // socialCaseNotes: ''
  };


//Make API call in app.js, pass down here as props
// const [caseInfo, setCaseInfo] = useState([]);
// useEffect (() => {
//   axios
//   .get("")
//   .then(response => setCaseInfo(response.data))
//   .catch(err => console.log(err.response));

// }, []);



// Route in app.js
//   <Route
//         path="/update-case/:id"
//         render={props => {
//           return <UpdateForm {...props} caseInfo={caseInfo} setCaseInfo={setCaseInfo} />
//         }}
//       />



const UpdateForm = props => {
    console.log(props, 'props in update')
    const [info, setInfo] = useState(initialCase);


    useEffect(() => {
        const caseToEdit = props.caseInfo.find(
            data => `${data.socialCaseId}` === props.match.params.id
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
            .then(response=> console.log(response))
            // .then(response => {
            //     props.setCaseInfo([...props.caseInfo, response.data])
            //     // props.history.push('/')
            // })
            .catch(err => console.log(err))


    }

    return (
     
          
            //   <Form handleSubmit={submitForm}>
               
        
            
            //         <label htmlFor="socialCaseFname">
            //           Homeless Person's Name
            //         <input type="text" name="socialCaseFname" id="socialCaseFname" value={info.socialCaseFname} onChange={handleChange} placeholder="First Name" required />
            //         </label>
            //         <label htmlFor="socialCaseLname">
            //           Last Name
            //         <input type="text" name="socialCaseLname" id="socialCaseLname" value={info.socialCaseLname} onChange={handleChange} placeholder="Last Name" required />
            //         </label>
            //         <label htmlFor="socialCaseAge">
            //           Age
            //         <input type="text" name="" id="socialCaseAge" value={info.socialCaseAge} onChange={handleChange} placeholder="Age" required />
            //         </label>
            //         <label htmlFor="socialCaseHometown">
            //           Home Town
            //         <input type="text" name="socialCaseHometown" id="socialCaseHometown" value={info.socialCaseHometown} onChange={handleChange} placeholder="City" required />
            //         </label>
            //         <label htmlFor="socialCaseCurrentTown">
            //           Current City
            //         <input type="text" name="socialCaseCurrentTown" id="socialCaseCurrentTown" value={info.socialCaseCurrentTown} onChange={handleChange} placeholder="City" required />
            //         </label>
            //         <label htmlFor="socialCaseContactInfo">
            //           Contact Info
            //         <input type="text" name="socialCaseContactInfo" id="socialCaseContactInfo" value={info.socialCaseContactInfo} onChange={handleChange} placeholder="Phone # or Address" required />
            //         </label>
            //         <label htmlFor="socialCaseIsSensitive">
            //           Is Case Sensitive?
            //           <input type="checkbox" name="socialCaseIsSensitive" id="socialCaseIsSensitive" checked={info.socialCaseIsSensitive} onChange={handleChange}/>
            //         </label>
            //       </FormSection>
            //       <FormSection>
            //         <label htmlFor="socialCaseFamilyFName">
            //           Friend or Family Member's Name
            //         <input type="text" name="socialCaseFamilyFName" id="socialCaseFamilyFName" value={info.socialCaseFamilyFName} onChange={handleChange} placeholder="First Name" required />
            //         </label>
            //         <label htmlFor="socialCaseFamilyLName">
            //           Last Name
            //         <input type="text" name="socialCaseFamilyLName" id="socialCaseFamilyLName" value={info.socialCaseFamilyLName} onChange={handleChange} placeholder="Last Name" required />
            //         </label>
            //         <label htmlFor="socialCaseFamilyAge">
            //           Age
            //         <input type="text" name="socialCaseFamilyAge" id="socialCaseFamilyAge" value={info.socialCaseFamilyAge} onChange={handleChange} placeholder="Age" required />
            //         </label>
            //         <label htmlFor="socialCaseFamilyRelationship">
            //           Relationship
            //         <input type="text" name="socialCaseFamilyRelationship" id="socialCaseFamilyRelationship" value={info.socialCaseFamilyRelationship} onChange={handleChange} placeholder="Relative" required />
            //         </label>
            //         <label htmlFor="socialCaseFamilyLastKnownLocation">
            //           Last Known Location
            //         <input type="text" name="socialCaseFamilyLastKnownLocation" id="socialCaseFamilyLastKnownLocation" value={info.socialCaseFamilyLastKnownLocation} onChange={handleChange} placeholder="City" required />
                    
            //       <textarea name="socialCaseNotes" id="socialCaseNotes" value={info.socialCaseNotes} onChange={handleChange} placeholder="Other family members, friends, last known job, etc" required />
                   
            
            //     <button type="submit">Edit</button>
            //   </Form>
            


              <>
      <form className="signup-form" onSubmit={handleLogin}>
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
    
        <button>Sign up</button>


      </form>
    </>
          )
        }

export default UpdateForm;