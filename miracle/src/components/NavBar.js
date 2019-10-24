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
  border:1.2px solid whitesmoke;
    
  font-family: "Roboto Condensed", serif;
  span {
    font-weight: bold;
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
  font-size: 1.8 rem;
  margin-right: 40px;
  :hover {
    
    border: 0.1em solid whitesmoke;
  
  }
`;


const StyledLoginNavLink = styled(NavLink)`
  background-color: #2DA561;
  color: #ffffff;
  text-decoration:none;
  padding: 8px 16px;
//   border: 0.1em solid #22283a;
  border-radius: 4px;
  font-size: 2rem;
  margin-right: 20px;
  background-color: lightsteelblue;

  :hover {
    
    border: 0.1em solid whitesmoke;
  
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
          <div onClick={() => this.props.history.push("/")} className="logo">
         
          </div>
          <StyledNavLink exact to="/" activeClassName="activeNavButton">
            Home
        </StyledNavLink>
          <StyledNavLink to="/viewallcases">View All Cases</StyledNavLink>
          <StyledNavLink to="/add/case">Add A New case</StyledNavLink>

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
