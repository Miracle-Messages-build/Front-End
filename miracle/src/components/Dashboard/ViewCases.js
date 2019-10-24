import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { axiosWithAuth } from '../../utils/axiosWithAuth';
import VolunteerCase from './VolunteerCase';



const CaseContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

const ViewCases = props => {
  const [socialCases, setSocialCases] = useState(null);

  useEffect(() => {
    if (props.viewAllCases) {
      axios.get('https://lindseyacason-miraclemessages.herokuapp.com/socialCases/socialCases')
        .then(response => {
          setSocialCases(response.data.filter(socialCase => socialCase.user !== null && !socialCase.socialCaseIsSensitive));
        })
        .catch(err => console.log(err));
    } else {
      axiosWithAuth()
        .get('https://lindseyacason-miraclemessages.herokuapp.com/users/getuserinfo')
        .then(response => {
          setSocialCases(response.data.socialCases);
        })
        .catch(err => console.log(err));
    }
  }, [props.viewAllCases])



  return (
    <>
      <CaseContainer>

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
            viewingAllCases={props.viewAllCases}
          // deleteCase={deleteCase}
          />
        )) : null}
      </CaseContainer>

    </>
  );
}

export default ViewCases;
