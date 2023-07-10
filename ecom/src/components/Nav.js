import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Nav = () => {

    
  return (
    <NavBar>
        <div className='navbar'>
            <ul className="navbar-lists">
                <li>
                    <NavLink to="/" className="navbar-link">
                        Home
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink to="/about" className="navbar-link">
                        About
                    </NavLink>
                </li> */}
                <li>
                    <NavLink to="/products" className="navbar-link">
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="navbar-link">
                        Contact
                    </NavLink>
                </li>
              
               
            </ul>
        </div>
    </NavBar>
  )
}
const NavBar = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: #003743;
          transition: color 0.3s linear;
        }
        &:hover{
          text-decoration:underline;
          transition:1ms;
        }
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
    
    
    
    }
  `;
export default Nav



