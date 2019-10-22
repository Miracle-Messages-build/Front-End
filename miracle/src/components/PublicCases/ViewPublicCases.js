import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PublicCase from './PublicCase';

const ViewPublicCases = () => {
  const [publicCases, setPublicCases] = useState(null);

  useEffect(() => {
    axios.get('https://lindseyacason-miraclemessages.herokuapp.com/socialCases/socialCases')
      .then(response => {
        console.log('Get Response', response)
        setPublicCases(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      {publicCases ? publicCases.map((publicCase, idx) => (
        <PublicCase
          key={idx}
          id={publicCase.socialCaseId}
          name={`${publicCase.socialCaseFname} ${publicCase.socialCaseLname}`}
          age={publicCase.socialCaseAge}
          lastKnownLoc={publicCase.socialCaseFamilyLastKnownLocation}
          contact={publicCase.socialCaseContactInfo}
          extraDetails={publicCase.socialCaseNotes}
        />
      )) : null}
    </>
  );
}

export default ViewPublicCases;
