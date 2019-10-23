import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import ViewCases from './ViewCases';
import VolunteerAddCase from './VolunteerAddCase';
import SignUp from '../SignUp.js'
import Login from '../Login.js'
import UpdateForm from '../EditCase.js'

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
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };
  return (
    <div>
      <DashHeader>
        <h1>Dashboard</h1>
        <nav>
          <Link to="/dashboard"><button>Dashboard</button></Link>
          <Link to="/dashboard/viewallcases"><button>View All Cases</button></Link>
          <Link to="/dashboard/addcase"><button>Add Case</button></Link>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/signup"><button>Signup</button></Link>

          
          {/* <Link to="/volunteer/case"><button>Vounteercase</button></Link> */}
          <Link to="/volunteer/cases"><button>Volunteer cases</button></Link>



        </nav>
      </DashHeader>
      <CaseContainer>
        {/* {props.location.pathname === "/dashboard" ? <ViewCases viewAllCases /> : null}
        <Route path="/dashboard/viewallcases" render={routeProps => <ViewCases {...routeProps} viewAllCases />} /> */}
        <Route path="/dashboard/addcase" component={VolunteerAddCase} />
        <button onClick={handleLogout}>Logout</button>
      </CaseContainer>
    </div>
  )
}

export default Dashboard;
