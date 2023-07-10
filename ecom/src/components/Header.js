import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import Nav from "./Nav"

const Header = () => {
  return (
    
        <MainHeader>
            <NavLink to="/" >
                <img srcSet='images/logo.png' alt="logo"  />
            </NavLink>
            <Nav/>
        </MainHeader>
    
  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  background-color: #FFEEE3;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
`;


export default Header