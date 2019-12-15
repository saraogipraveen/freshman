import React, { useState, useEffect } from 'react';
import Container from '../styled_components/Container';
import styled from 'styled-components';

const SearchBox = styled.div`
display : flex;
flex-direction: row;
`;

const InputBox = styled.input`
border-radius : 5px;
border : 3px solid darksalmon;
`;

const Weather = (props) => {
    const [searchText, setSearchText] = useState("")
    const getWeather = () => {
        console.log("TCL: getWeather -> getWeather", searchText)
    }
    return (
        <Container>
            <h1>Current Weather</h1>
            <SearchBox>
                <InputBox name={'search'} type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}></InputBox>
                <button onClick={getWeather}>Search</button>
            </SearchBox>
        </Container>
    )
}

export default Weather;
