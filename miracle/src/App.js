import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchCase, editCase, addCase } from './actions/index.js'
import axios from 'axios';

import Login from './components/Login.js'
import SignUp from './components/SignUp.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import PublicCases from './components/PublicCases/PublicCases'

import UpdateForm from './components/EditCase.js'
import PrivateRoute from './components/PrivateRoute.js'

import './App.css';

function App() {
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
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/public" component={PublicCases} />

      <PrivateRoute
        path="/dashboard"
        render={props => {
          return <Dashboard {...props} />;
        }
        } component={Dashboard}
      />

      <PrivateRoute
        path="/volunteer/edit/:id"
        render={props => {
          return <UpdateForm {...props} editCase={props.editCase} caseInfo={caseInfo} setCaseInfo={setCaseInfo} />;
        }}
      />
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