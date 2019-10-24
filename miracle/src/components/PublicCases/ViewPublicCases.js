import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import PublicCase from './PublicCase';

import { fetchCase, editCase, addCase, deleteCase } from '../../actions/index.js'
import { connect } from 'react-redux';;


const ViewPublicCases = (props) => {

  useEffect(() => {
    props.fetchCase();
  }, [])


  const [publicCases, setPublicCases] = useState(null);

  useEffect(() => {


    setPublicCases(props.cases.filter(socialCase => socialCase.user === null));

  }, [props.cases]);
  if (props.loading) {
    return <h1>Loading...</h1>
  }

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



const mapStateToProps = state => {
  return {
    cases: state.cases,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchCase, editCase, addCase, deleteCase })(ViewPublicCases);