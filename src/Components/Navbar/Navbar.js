
import React from "react";

import styled from "styled-components";
import Density_Logo from "../../images/density-logo.png";
import { Link } from "gatsby";

// Created styled components for the Navbar elements

const Container = styled.div`
width:100%;
background-color:#000;
`
const NavbarContainer = styled.nav`
  display: flex;
  padding: 1rem 16rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  backdrop-filter: blur(20px);
  background-color: #2A5D3233;
`;

const Logo = styled.img`
  max-width: 100px;
  width: 99.953px;
  height: 24px;
`;

const Navbody = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  color: #fcfcfc;
`;
const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap:20px;
  cursor: pointer;
`;

const NavLink = styled.li`
  margin-right: 20px;
  color: #fcfcfc;
  font-family: "Neurial Grotesk", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Button = styled.button`
  display: flex;
  width:180px;
  height: 48px;
  padding: 16px 22px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Neurial Grotesk", sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 8px;
  background: linear-gradient(86deg, #d4f938 23.09%, #32d875 108.69%);
  box-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 0.8);
  backdrop-filter: blur(5px);
`;

const Navbar = () => {
  return (
    <Container>
    <NavbarContainer>
      <Logo src={Density_Logo} alt="Logo" />

      <Navbody>
        <NavLinks>
          <Link>
            <NavLink>Career</NavLink>
          </Link>
          <Link>
            <NavLink>Blogs</NavLink>
          </Link>
          <Link>
            {" "}
            <NavLink>Leaderboard</NavLink>
          </Link>
          <Link>
            {" "}
            <NavLink>Fees</NavLink>
          </Link>
        </NavLinks>

        <Button>Trade Now</Button>
      </Navbody>
    </NavbarContainer>
    </Container>
  );
};

export default Navbar;
