import React, { useState, useEffect } from 'react'
import axios from 'axios';

import VolunteerCase from './VolunteerCase';

const ViewCases = props => {
  const [socialCases, setSocialCases] = useState(null);

  useEffect(() => {
    axios.get('https://lindseyacason-miraclemessages.herokuapp.com/socialCases/socialCases')
      .then(response => {
        if (props.viewAllCases) {
          setSocialCases(response.data);
        } else {
          //     /* Waiting for backend to implement user id to case */

          //     //userID would be probably coming from localstorage
          //     const userId = 0;

          //     //This will set our cases state to only include cases that match the user's id.
          //     setSocialCases(response.data.filter(socialCase => socialCase.user === userId));  
        }
      })
      .catch(err => console.log(err));
  }, [props.viewAllCases])

  const deleteCase = id => {
    axios.delete(`https://lindseyacason-miraclemessages.herokuapp.com/socialCases/socialCases/${id}`)
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
          familyName={'missing from backend'}
          familyAge={'missing from backend'}
          relationship={'missing from backend'}
          lastKnownLoc={'missing from backend'}
          extraDetails={socialCase.socialCaseNotes}
          deleteCase={deleteCase}
        />
      )) : null}
    </>
  )
}

export default ViewCases;
