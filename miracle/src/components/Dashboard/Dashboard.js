// import React from 'react';
// import { Route, Link } from 'react-router-dom';
// import styled from 'styled-components';

// import ViewCases from './ViewCases';
// import VolunteerAddCase from './VolunteerAddCase';
// import PrivateRoute from '../PrivateRoute'

// const DashHeader = styled.header`
//   width: 80%;
//   margin: 0 auto;
//   text-align: center;
// `;

// const CaseContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
// `;

// const Dashboard = props => {
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     window.location.reload();
//   };
//   return (
//     <div>
//       <DashHeader>
//         <h1>Dashboard</h1>
//         <nav>
//           <Link to="/dashboard"><button>Dashboard</button></Link>
//           <Link to="/dashboard/viewallcases"><button>View All Cases</button></Link>
//           <Link to="/dashboard/add/case"><button>Add Case</button></Link>
//           <button onClick={handleLogout}>Logout</button>

//         </nav>
//       </DashHeader>
//       <CaseContainer>
//         {props.location.pathname === "/dashboard" ? <ViewCases /> : null}
//         <Route path="/viewallcases" render={routeProps => <ViewCases {...routeProps} viewAllCases />} />
//         <PrivateRoute
//           exact path="/add/case"
//           render={props => {
//             return <VolunteerAddCase {...props} addCase={props.addcase} />;
//           }} component={VolunteerAddCase}
//         />
//       </CaseContainer>
//     </div>
//   );
// }

// export default Dashboard;
