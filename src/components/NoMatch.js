import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../styled_components/Container';

const NoMatch = (props) => {
    let location = useLocation();
    return <Container> <h1>> Oops! <strong>{location.pathname}</strong> seems invalid </h1></Container>
}

export default NoMatch;
