import React from 'react';
import { useLocation } from 'react-router-dom';

const NoMatch = (props) => {
    let location = useLocation();
    console.log("TCL: NoMatch -> location", location)

    return <h1>Oops! You are lost</h1>
}

export default NoMatch;
