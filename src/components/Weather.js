import React, { useState, useEffect } from 'react';
import Container from '../styled_components/Container';
import styled from 'styled-components';

const Weather = (props) => {

    const SearchBox = styled.div`
    display : flex;
    flex-direction: row;
    `

    const InputBox = styled.input`
    border-radius : 5px;
    border : 3px solid darksalmon;
`;

    const [searchText, setSearchText] = useState('default')

    useEffect((props) => {
        console.log("TCL: Weather -> props", props)
    }, [])

    const getWeather = () => {
        console.log("TCL: getWeather -> getWeather", searchText)
    }

    console.log("TCL: Weather -> searchText", searchText)
    return (
        <Container>
            <h1>Current Weather</h1>
            <SearchBox>
                <InputBox type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}></InputBox>
                <button onClick={getWeather}>Search</button>
            </SearchBox>
        </Container>
    )

}


export default Weather;
