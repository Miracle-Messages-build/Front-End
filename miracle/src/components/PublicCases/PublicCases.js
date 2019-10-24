import React from 'react';
import { Route, NavLink } from 'react-router-dom';
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
        <NavLink exact to="/dashboard" activeClassName="selectedItem">Dashboard</NavLink>
        <NavLink exact to="/dashboard/viewallcases" activeClassName="selectedItem">View All Volunteer Cases</NavLink>
        <NavLink exact to="/" activeClassName="selectedItem">View Public Cases</NavLink>
        <NavLink exact to="/newcase" activeClassName="selectedItem">Add Missing Person</NavLink>
        <NavLink exact to="/signup" activeClassName="selectedItem">Sign up</NavLink>
        <NavLink exact to="/login" activeClassName="selectedItem">Login</NavLink>
      </MiracleNav>
      <CaseContainer>
        {props.location.pathname === "/" ? <ViewPublicCases /> : null}
        <Route exact path="/newcase" component={AddCase} />
      </CaseContainer>
    </>
  );
}

export default PublicCases;
