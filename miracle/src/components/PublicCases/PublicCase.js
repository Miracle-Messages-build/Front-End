import React from 'react';
import styled from 'styled-components';

const CaseContainer = styled.div`
  margin: 2%;
  margin-top: 5%;
  width: 16%;
  min-width: 300px;
  background-color: whitesmoke;
  box-shadow: 0 0 2px 1px rgb(100, 100, 100, 0.5);
  
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1200px){
    width: 40%;
  }
  @media (max-width: 768px){
    width: 45%;
  }
  @media (max-width: 578px){
    width: 95%;
  }
`;

const CaseHeader = styled.h1`
  font-size: 2.2rem;
  letter-spacing: .15rem;
  text-align: center;
  color: black;
  padding: 3%;
  background-color: cornflowerblue;
`;

const CaseBody = styled.div`  
  width: 100%;
  padding: 5%;
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
          <li>Notes: {props.extraDetails}</li>
        </ul>
      </CaseBody>
    </CaseContainer>
  );
}

export default PublicCase;
