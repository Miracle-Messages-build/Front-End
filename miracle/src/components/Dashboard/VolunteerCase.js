import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

/*
Volunteer Case should have:
Name of homeless
Age
Home Town
Current City
Contact (phone # or address)
  Information on who they are trying to reconnect with:
    Name
    Age
    Relationship to homeless person
    Last known location (Address)
    Any other helpful information like family or friends names, last known job
*/

const CaseContainer = styled.div`
  margin: 2%;
  /* margin-top: 10%; */
  width: 15%;
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

  button {
    width: 48%;
    height: 30px;
    margin: 1%;
  }
`;

const VolunteerCase = props => {
  // console.log(props,"inside")


  return (
    
    <CaseContainer>
      <CaseHeader>
        {props.isResolved ? 'CLOSED CASE' : 'OPEN CASE'}
      </CaseHeader>
      <CaseBody>
       
        <ul>
          <li>{props.cases.socialCaseFname}, Age: {props.cases.socialCaseAge}</li>
          <li>Home Town: {props.cases.socialCaseHometown}</li>
          <li>Current City: {props.cases.socialCaseCurrentTown}</li>
          <li>Contact: {props.cases.socialCaseContactInfo}</li>
        </ul>


      
        <ul>
          <p>Is Searching For</p>
          <li>{props.cases.socialCaseFamilyFName}, {props.cases.socialCaseFamilyLName}</li>
          <li>Relationship: {props.cases.socialCaseFamilyRelationship}</li>
          <li>Last Known Location: {props.cases.socialCaseFamilyLastKnownLocation}</li>
        </ul>
        <p>{props.cases.socialCaseFamilyNotes}</p>
      </CaseBody>
      <CaseButtons>
      <Link to={`/volunteer/edit/${props.cases.socialCaseId}`}>
        <button >Edit Case</button>
        </Link>
        <button onClick={() => props.deleteCase(props.cases.socialCaseId)}>Delete Case</button>
      </CaseButtons>
    </CaseContainer>
  )
}

export default VolunteerCase;
