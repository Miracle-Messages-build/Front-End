import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"


import { fetchCase, editCase, addCase, deleteCase } from '../../actions/index.js'
import { connect } from 'react-redux';;

const CaseContainer = styled.div`
  margin: 2%;
  margin-top: 5%;
  width: 20%;
  min-width: 300px;
  background-color: whitesmoke;
  box-shadow: 0 0 2px 1px rgb(100, 100, 100, 0.5);

  @media (max-width: 1200px){
    width: 40%;
  }
  @media (max-width: 768px){
    width: 45%;
  }
  @media (max-width: 578px){
    width: 95%;
  }

  ul {
    p {
      font-size: 1.8rem;
      font-style: italic;
      padding: 4% 0;
    }
  }
`;

const CaseHeader = styled.h1`
  font-size: 2.2rem;
  letter-spacing: .15rem;
  text-align: center;
  color: black;
  padding: 3%;
  background-color: cornflowerblue;
`;

const CaseBody = styled.div`
  width: 100%;
  padding: 3%;
`;

const CaseButtons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 3%;

  a {
    text-decoration: none;
    color: black;
    font-size: 1.4rem;
    background-color: #e1e1e1;
    width: 45%;
    margin: .5%;
    height: 30px;
    border: 1px solid #adadad;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    font-size: 1.4rem;
    width: 45%;
    margin: .5%;
    height: 30px;
    background-color: #e1e1e1;
    border: 1px solid #adadad;
    display: flex;
    justify-content: center;
    align-items: center;
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
        <p>Notes: {props.extraDetails}</p>
      </CaseBody>
      {props.viewingAllCases ? null :
        <CaseButtons>
          <Link to={`/dashboard/volunteer/edit/${props.id}`}><span>Edit Case</span></Link>
          <button onClick={() => props.deleteCase(props.id)}><span>Delete</span></button>
        </CaseButtons>
      }

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