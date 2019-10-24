import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  height: 80px;
  align-items: center;
  font-size: 2rem;
  width: 100%;
  background-color: lightsteelblue;
    
  font-family: "Roboto Condensed", serif;
  span {
    font-weight: bold;
  }
  .logo {
    flex-grow: 2;
    justify-content: flex-start;
    text-align: left;
    padding-left: 20px;
    color: #fffc88;
    margin-left: 40px;
    cursor: pointer;
    span{
      color:#f6f2ef;
    }
  }
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    .logo {
      padding-left: 0;
      margin: 5% 0;
    }
    a {
      margin-right: 0;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 24px;
  color: #f6f2ef;
  font-family: "Roboto Condensed", serif;
  font-size: 1.5rem;
  margin-right: 40px;
`;


const StyledLoginNavLink = styled(NavLink)`
  background-color: #2DA561;
  color: #ffffff;
  text-decoration:none;
  padding: 8px 16px;
//   border: 0.1em solid #22283a;
  border-radius: 4px;
  font-size: 1.5rem;
  margin-right: 20px;
  background-color: lightsteelblue;

  :hover {
    // background-color: #2da562;
    // border: 0.1em solid #2da562;
    // color: #fff !important;
  }
`;

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

    return (
      <div>
        <StyledNav>
          <div onClick={() => this.props.history.push("/public")} className="logo">
         
          </div>
          <StyledNavLink exact to="/public" activeClassName="activeNavButton">
            Home
        </StyledNavLink>
          <StyledNavLink to="/viewallcases">View all Cases</StyledNavLink>
          <StyledNavLink to="/add/case">Add a new case</StyledNavLink>

          <StyledNavLink to="/signup" activeClassName="activeNavButton">
            Signup
        </StyledNavLink>
        {/* <StyledNavLink to={`/profile/${userId}`} activeClassName="activeNavButton">
          My Profile
        </StyledNavLink> */}
          <StyledLoginNavLink
            to="/login"
            className="login-btn"
            activeClassName="activeNavButton"
          >
            Login
        </StyledLoginNavLink > 
        <button className="logout" onClick={handleLogout}>Logout</button>

        </StyledNav>
       
      </div>
    );
  }
}
