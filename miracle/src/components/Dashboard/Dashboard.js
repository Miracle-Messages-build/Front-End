import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PrivateRoute from '../PrivateRoute'

import { MiracleNav } from '../MiracleNav';

import ViewCases from './ViewCases';
import VolunteerAddCase from './VolunteerAddCase';

const CaseContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Dashboard = props => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    props.history.push('/')
  };

  return (
    <div>
      <MiracleNav>
        <h1>Miracle Messages</h1>
        <a href="https://bw1-crutledge.netlify.com/index.html">Home</a>
        <NavLink exact to="/dashboard" activeClassName="selectedItem">Dashboard</NavLink>
        <NavLink exact to="/dashboard/add/case" activeClassName="selectedItem">Add Case</NavLink>
        <NavLink exact to="/dashboard/viewallcases" activeClassName="selectedItem">View All Volunteer Cases</NavLink>
        <NavLink exact to="/" activeClassName="selectedItem">View Public Cases</NavLink>
        <button onClick={handleLogout}>Logout</button>
      </MiracleNav>
      <CaseContainer>
        {props.location.pathname === "/dashboard" ? <ViewCases /> : null}
        <Route path="/dashboard/viewallcases" render={routeProps => <ViewCases {...routeProps} viewAllCases />} />
        <PrivateRoute
          exact path="/dashboard/add/case"
          render={props => {
            return <VolunteerAddCase {...props} addCase={props.addcase} />;
          }} component={VolunteerAddCase}
        />
      </CaseContainer>
    </div>
  );
}

export default Dashboard;