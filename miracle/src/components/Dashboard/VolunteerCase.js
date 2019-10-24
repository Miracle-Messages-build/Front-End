import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"


import { fetchCase, editCase, addCase, deleteCase } from '../../actions/index.js'
import { connect } from 'react-redux';;

const CaseContainer = styled.div`
  margin: 2%;
  width: 15%;
  background-color: whitesmoke;

  box-shadow: 0 0 2px 1px rgb(100, 100, 100, 0.5);
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    p {
      font-style: italic;
    }

    li {
      padding: 0;
      margin: 0;
    }
  }
`;

const CaseHeader = styled.h1`
  font-size: 2rem;
  color: whitesmoke;
  text-align: center;
  margin: 0;
  padding: 0;
  background-color: dodgerblue;
`;

const CaseBody = styled.div`
  padding: 3%;
`;

const CaseButtons = styled.div`
  display: flex;
  justify-content: center;

 
  a {
    width: 48%;
    margin: 1%;
    height: 30px;
  }
`;

const VolunteerCase = props => {
  // console.log(props,"vol case")
  return (
    <CaseContainer>
      <CaseHeader>
        {props.isResolved ? 'CLOSED CASE' : 'OPEN CASE'}
      </CaseHeader>
      <CaseBody>
        <ul>
          <li>{props.name}, Age: {props.age}</li>
          <li>Home Town: {props.homeTown}</li>
          <li>Current City: {props.currentCity}</li>
          <li>Contact: {props.contact}</li>
        </ul>

        <ul>
          <p>Is Searching For</p>
          <li>{props.familyName}, {props.familyAge}</li>
          <li>Relationship: {props.relationship}</li>
          <li>Last Known Location: {props.lastKnownLoc}</li>
        </ul>
        <p>{props.extraDetails}</p>
      </CaseBody>
      <CaseButtons>
        <Link to={`/dashboard/volunteer/edit/${props.id}`}>
          <button >Edit Case</button>
        </Link>
        <button onClick={() => props.deleteCase(props.id)}>Delete Case</button>
      </CaseButtons>
    </CaseContainer>
  )
}


const mapStateToProps = state => {
  return {
    cases: state.cases,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchCase, editCase, addCase, deleteCase })(VolunteerCase);