import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import ViewPublicCases from './ViewPublicCases';
import AddCase from './AddPublicCase.js'

import { MiracleNav } from '../MiracleNav';

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
      <MiracleNav>
        <h1>Miracle Messages</h1>
        <a href="https://bw1-crutledge.netlify.com/index.html">Home</a>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/">View Public Cases</Link>
        <Link to="/newcase">Add Missing Person</Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Login</Link>
      </MiracleNav>
      <CaseContainer>
        {props.location.pathname === "/" ? <ViewPublicCases /> : null}
        <Route exact path="/newcase" component={AddCase} />
      </CaseContainer>
    </>
  );
}

export default PublicCases;
