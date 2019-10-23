import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AddPublicCase from './components/PublicCases/AddPublicCase.js'
import PublicCases from './components/PublicCases/PublicCases'
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

import { fetchCase, editCase, addCase } from './actions/index.js'
import { connect } from 'react-redux';
import VolunteerAddCase from './components/Dashboard/VolunteerAddCase';
import PublicCase from './components/PublicCases/PublicCase';


function App(props) {
  const [caseInfo, setCaseInfo] = useState([])

  useEffect(() => {
    axios
      .get('https://lindseyacason-miraclemessages.herokuapp.com/socialCases/socialCases')
      .then(response => {
        setCaseInfo(response.data);
      })
  }, []);

  return (
    <div className="App">
      <h1>Miracle messages</h1>

      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/public" component={PublicCases} />

      {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}

      {/* <PrivateRoute
        exact path="/dashboard/add/case"
        render={props => {
          return <VolunteerAddCase {...props} addCase={props.addcase} />;
        }} component={VolunteerAddCase}
      /> */}

      < PrivateRoute
        path="/dashboard"
        render={props => {
          return <Dashboard {...props} />;
        }
        } component={Dashboard}
      />

      <PrivateRoute
        path="/volunteer/case"
        render={props => {
          return <VolunteerCase {...props} />;
        }} component={VolunteerCase}
      />

      <PrivateRoute
        path="/volunteer/cases"
        render={props => {
          return <VolunteerCases {...props} />;
        }} component={VolunteerCases}
      />

      <Route
        path="/volunteer/edit/:id"
        render={props => {
          return <UpdateForm {...props} editCase={props.editCase} caseInfo={caseInfo} setCaseInfo={setCaseInfo} />;
        }}
      />

      {/* <Route
        path="/volunteer/edit/:id"
        render={props => {
          return <UpdateForm {...props} caseInfo={caseInfo} setCaseInfo={setCaseInfo} />;
        }}
      /> */}
    </div >
  );
}

const mapStateToProps = state => {
  return {
    cases: state.cases,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchCase, editCase, addCase })(App);