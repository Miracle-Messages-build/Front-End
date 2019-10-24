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
import AddCase from './components/PublicCases/AddPublicCase.js'
import ViewCases from './components/Dashboard/ViewCases.js'
import Nav from './components/NavBar.js'
import Footer from './components/Footer.js'

import { fetchCase, editCase, addCase } from './actions/index.js'
import { connect } from 'react-redux';
import VolunteerAddCase from './components/Dashboard/VolunteerAddCase';
import PublicCase from './components/PublicCases/PublicCase';


function App(props) {
  useEffect(() => {
    props.fetchCase();
  }, []);
  const [caseInfo, setCaseInfo] = useState([])
  useEffect(() => {
    setCaseInfo(props.cases);
  }, []);

  return (
    <div className="App">

      <Route path="/" component={Nav} />
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
        path="/volunteer/case"
        render={props => {
          return <VolunteerCase {...props} />;
        }} component={VolunteerCase}
      />

     

      <Route
        path="/volunteer/edit/:id"
        render={props => {
          return <UpdateForm {...props}  caseInfo={caseInfo} setCaseInfo={setCaseInfo} />;
        }}
      />

      <PrivateRoute
        exact path="/viewallcases"
        render={props => {
          return <ViewCases {...props} />;
        }} component={ViewCases}
      />
      <PrivateRoute
        exact path="/add/case"
        render={props => {
          return <VolunteerAddCase {...props}  />;
        }} component={VolunteerAddCase}
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