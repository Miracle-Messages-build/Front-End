import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AddPublicCase from './components/PublicCases/AddPublicCase.js'
import UpdateForm from './components/EditCase.js'
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard.js'
import Login from './components/Login.js'
import SignUp from './components/SignUp.js'
import PrivateRoute from './components/PrivateRoute.js'
import VolunteerCase from './components/Dashboard/VolunteerCase.js'
import VolunteerCases from './components/TestForRedux.js'
import AddCase from './components/PublicCases/AddPublicCase.js'
import ViewCases from './components/Dashboard/ViewCases.js'
function App() {
  const [caseInfo, setCaseInfo] = useState([])

  useEffect(() => {
    axios
      .get('https://lindseyacason-miraclemessages.herokuapp.com/socialCases/socialCases')
      .then(response => console.log(response.data))

  }, [])

  return (
    <div className="App">
      <Router>
        <h1>Miracle messages</h1>
        <Dashboard />
        <ViewCases/>
        {/* <UpdateForm/> */}
        {/* <AddCase/> */}
      {/* <VolunteerCase/> */}
      {/* <VolunteerCases  caseInfo={caseInfo} setCaseInfo={setCaseInfo}/> */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/volunteercase" component={VolunteerCase} />
        <Route path="/volunteercases" component={VolunteerCases} />
        <PrivateRoute
          path="/volunteer/case"
          render={props => {
            return <VolunteerCase {...props}  />;
          }} component={VolunteerCase}
        />
        <PrivateRoute
          path="/volunteer/cases"
          render={props => {
            return <VolunteerCases {...props}  />;
          }} component={VolunteerCases}
        />

        
        <Route
          path="/volunteer/edit/:id"
          render={props => {
            return <UpdateForm {...props} caseInfo={caseInfo} setCaseInfo={setCaseInfo} />;
          }} 
        />
      </Router>
    </div>

  );
}



export default App;
