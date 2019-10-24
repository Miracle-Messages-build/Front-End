import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import ViewCases from './ViewCases';
import VolunteerAddCase from './VolunteerAddCase';
import PrivateRoute from '../PrivateRoute'

import { MiracleNav } from '../MiracleNav';

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
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/add/case">Add Case</Link>
        <Link to="/dashboard/viewallcases">View All Cases</Link>
        <Link to="/">View Public Cases</Link>
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