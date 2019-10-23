import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import ViewPublicCases from './ViewPublicCases';
import AddPublicCase from './AddPublicCase';

const CaseHeader = styled.header`
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

const PublicCases = props => {
  return (
    <div>
      <CaseHeader>
        <Link to="/publiccases"><button>View Public Cases</button></Link>
        <Link to="/publiccases/addcase"><button>Add Missing Person</button></Link>
      </CaseHeader>

      <CaseContainer>
        {props.location.pathname === "/publiccases" ? <ViewPublicCases /> : null}
        <Route path="/publiccases/addcase" component={AddPublicCase} />
      </CaseContainer>
    </div>
  );
}

export default PublicCases;