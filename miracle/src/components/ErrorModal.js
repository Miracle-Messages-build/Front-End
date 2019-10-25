import React from 'react'
import styled from 'styled-components';

const Modal = styled.div`
  position: absolute;
  top: 20%;
  left: 42%;
  z-index: 1;
  width: 305px;
  height: 200px;
  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: 1px solid black;
  background-color: whitesmoke;

  @media (max-width: 800px){
    left: 31%;    
  }

  @media (max-width: 578px){
    top: 30%;
    left: 0;
    width:  100%;
  }

  h1 {
    font-size: 2.8rem;
    text-align: center;
    color: white;
    background-color: rgb(228, 48, 48, 0.7);
    margin: 0;
    padding-top: 2%;
    width: 100%;
    height: 48px;
  }

  p {
    padding: .5%;
    margin: 2% 1%;
  }

  button {
    width: 100%;
    height: 40px;
    font-size: 1.8rem;
  }
`

const ErrorModal = ({ error, setError }) => {

  const clearError = () => {
    setError({ isActive: false, msg: '' });
  }

  return (
    <Modal>
      <h1>Error</h1>
      <p>{error}</p>
      <button onClick={clearError}>Okay</button>
    </Modal>
  )
}

export default ErrorModal;
