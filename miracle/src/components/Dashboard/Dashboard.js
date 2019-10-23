import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import ViewCases from './ViewCases';
import VolunteerAddCase from './VolunteerAddCase';

const DashHeader = styled.header`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

const CaseContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Dashboard = props => {
  return (
    <div>
      <DashHeader>
        <h1>Dashboard</h1>
        <nav>
          <Link to="/dashboard"><button>Dashboard</button></Link>
          <Link to="/dashboard/viewallcases"><button>View All Cases</button></Link>
          <Link to="/dashboard/addcase"><button>Add Case</button></Link>
          <button>Logout</button>
        </nav>
      </DashHeader>
      <CaseContainer>
        {props.location.pathname === "/dashboard" ? <ViewCases /> : null}
        <Route path="/dashboard/viewallcases" render={routeProps => <ViewCases {...routeProps} viewAllCases />} />
        <Route path="/dashboard/addcase" component={VolunteerAddCase} />
      </CaseContainer>
    </div>
  )
}

export default Dashboard;
