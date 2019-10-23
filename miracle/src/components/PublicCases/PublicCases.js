import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import ViewPublicCases from './ViewPublicCases';
import AddPublicCase from './AddPublicCase';

const CaseNav = styled.nav`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  background-color: cornflowerblue;
  padding: 1% 0;
  border-radius: 15px;

  h1 {
    color: black;
    font-size: 3rem;
    margin-bottom: 1%;
  }

  a {
    text-decoration: none;
    margin: 1%;    
    color: #23293B;
  }
`;

const CaseContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

const PublicCases = props => {
  return (
    <>
      <CaseNav>
        <h1>Miracle Messages</h1>
        <Link to="/public">View Public Cases</Link>
        <Link to="/public/addcase">Add Missing Person</Link>
      </CaseNav>

      <CaseContainer>
        {props.location.pathname === "/public" ? <ViewPublicCases /> : null}
        <Route path="/public/addcase" component={AddPublicCase} />
      </CaseContainer>
    </>
  );
}

export default PublicCases;
