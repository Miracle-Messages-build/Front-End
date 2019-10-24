import styled from 'styled-components';

export const MiracleNav = styled.nav`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  background-color: cornflowerblue;
  padding: 1% 0;
  border-radius: 15px;

  @media (max-width: 576px){
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    color: black;
    font-size: 3rem;
    margin-bottom: 1%;
  }

  a {
    font-size: 1.6rem;
    text-decoration: none;
    /* margin: 1%;     */
    padding: 1%;
    border-radius: 15px;
    color: #23293B;
  }

  button {
    font-size: 1.6rem;
    text-decoration: none;
    margin: 1%;    
    color: #23293B;
    background-color: cornflowerblue;
    border: none;
    cursor: pointer;
  }
`;