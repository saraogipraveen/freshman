import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const NavBar = (props) => {

    const Nav = styled.nav`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 20px 0;
    `

    const StyledLink = styled(Link)`
        text-decoration: none;
        color: #000;
        font-weight: bold;
        padding: 0 25px;
    `


    return (
        <Nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/weather">Weather</StyledLink>
            <StyledLink to="/others">Others</StyledLink>
            <StyledLink to="/go/to/no/match">No Match</StyledLink>
        </Nav>
    )
}

export default NavBar;
