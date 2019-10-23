import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { axiosWithAuth } from '../../utils/axiosWithAuth';
import VolunteerCase from './VolunteerCase';

const ViewCases = props => {
  const [socialCases, setSocialCases] = useState(null);

  useEffect(() => {
    if (props.viewAllCases) {
      axios.get('https://lindseyacason-miraclemessages.herokuapp.com/socialCases/socialCases')
        .then(response => {
          setSocialCases(response.data.filter(socialCase => socialCase.user !== null));
        })
        .catch(err => console.log(err));
    } else {
      axiosWithAuth()
        .get('https://lindseyacason-miraclemessages.herokuapp.com/users/getuserinfo')
        .then(response => {
          // console.log(response)
          //I think the object was response.data.socialCases [array], will need to log the response to make sure
          setSocialCases(response.data.socialCases);
        })
        .catch(err => console.log(err));
    }
  }, [props.viewAllCases])

  //Requires authentication! @Taylor
  const deleteCase = id => {
    axiosWithAuth()
      .delete(`https://lindseyacason-miraclemessages.herokuapp.com/socialCases/socialCases/${id}`)
      .then(() => {
        //We also want to remove the now deleted card from our state
        setSocialCases(socialCases.filter(socialCase => socialCase.socialCaseId !== id));
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      {socialCases ? socialCases.map((socialCase, idx) => (
        <VolunteerCase
          key={idx}
          id={socialCase.socialCaseId}
          name={`${socialCase.socialCaseFname} ${socialCase.socialCaseLname}`}
          age={socialCase.socialCaseAge}
          homeTown={socialCase.socialCaseHomeTown}
          currentCity={socialCase.socialCaseCurrentTown}
          contact={socialCase.socialCaseContactInfo}
          familyName={`${socialCase.socialCaseFamilyFName} ${socialCase.socialCaseFamilyLName}`}
          familyAge={socialCase.socialCaseFamilyAge}
          relationship={socialCase.socialCaseFamilyRelationship}
          lastKnownLoc={socialCase.socialCaseFamilyLastKnownLocation}
          extraDetails={socialCase.socialCaseNotes}
          deleteCase={deleteCase}
        />
      )) : null}
    </>
  );
}

export default ViewCases;
