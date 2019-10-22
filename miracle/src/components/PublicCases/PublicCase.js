import React from 'react';
import styled from 'styled-components';

const CaseContainer = styled.div`
  margin: 2%;
  margin-top: 10%;
  width: 15%;
  max-height: 160px;
  box-shadow: 0 0 2px 1px rgb(100, 100, 100, 0.5);
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    p {
      font-style: italic;
    }

    li {
      padding: 0;
      margin: 0;
    }
  }
`;

const CaseHeader = styled.h1`
  font-size: 2rem;
  color: whitesmoke;
  text-align: center;
  margin: 0;
  padding: 0;
  background-color: dodgerblue;
`;

const CaseBody = styled.div`  
  display: flex;
  width: 100%;
  height: 60%;
  align-items: center;
  padding: 3%;
`;

const PublicCase = props => {
  return (
    <CaseContainer>
      <CaseHeader>
        MISSING
      </CaseHeader>
      <CaseBody>
        <ul>
          <li>{props.name}, Age {props.age}</li>
          <li>Last Known Location: {props.lastKnownLoc}</li>
          <li>Contact: {props.contact}</li>
        </ul>
      </CaseBody>
    </CaseContainer>
  );
}

export default PublicCase;
