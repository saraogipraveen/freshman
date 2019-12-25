import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const NavBar = (props) => {

    const Nav = styled.nav`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 2rem;

    `;

    const StyledLink = styled(Link)`
        text-decoration: none;
        // color: #000;
        color: inherit;
        font-size: 1.6rem;
        font-weight: bold;
        padding: 0 25px;
        display: inline-block;
        transition: 5s all;
        padding-bottom: .5rem;

        &:first-child{
            margin-right: auto;
            font-size: 20px;
        }
    `


    return (
        <Nav>
            <StyledLink to="/">&lt; N O O B /&gt;</StyledLink>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/weather">Weather</StyledLink>
            <StyledLink to="/others">Others</StyledLink>
            <StyledLink to="/go/to/no/match">No Match</StyledLink>
        </Nav>
    )
}

export default NavBar;
