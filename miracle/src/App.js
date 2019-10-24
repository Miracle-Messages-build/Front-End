import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import { fetchCase, editCase, addCase } from './actions/index.js'
import { connect } from 'react-redux';

import './App.css';

import Login from './components/Login.js'
import SignUp from './components/SignUp.js'

import Dashboard from './components/Dashboard/Dashboard.js'
import PublicCases from './components/PublicCases/PublicCases'

import VolunteerCase from './components/Dashboard/VolunteerCase.js'
import AddCase from './components/PublicCases/AddPublicCase.js'
import UpdateForm from './components/EditCase.js'

import PrivateRoute from './components/PrivateRoute.js'
import Footer from './components/Footer.js'

function App(props) {
  useEffect(() => {
    props.fetchCase();
  }, []);

  const [caseInfo, setCaseInfo] = useState([]);

  useEffect(() => {
    setCaseInfo(props.cases);
  }, [props.cases]);

  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route exact path="/" component={PublicCases} />
      <Route exact path="/newcase" component={AddCase} />

      < PrivateRoute
        path="/dashboard"
        render={props => {
          return <Dashboard {...props} />;
        }
        } component={Dashboard}
      />

      <PrivateRoute
        path="/dashboard/volunteer/case"
        render={props => {
          return <VolunteerCase {...props} />;
        }} component={VolunteerCase}
      />

      <Route
        path="/dashboard/volunteer/edit/:id"
        render={props => {
          return <UpdateForm {...props} caseInfo={caseInfo} setCaseInfo={setCaseInfo} />;
        }}
      />
      <Footer />
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