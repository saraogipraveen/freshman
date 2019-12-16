import React, { useState, useEffect } from 'react';
import Container from '../styled_components/Container';
import styled from 'styled-components';
import axios from 'axios';

const SearchBox = styled.div`
display : flex;
justify-content: center;
`;

const InputBox = styled.input`
outline : none;
margin-right : 20px;
border-radius : 5px;
border : 3px solid orangered;

&:focus{
    box-shadow: 0px 2px 2px 2px lightskyblue;
}
`;

const Button = styled.button`
`


const API_KEY = 'd1d5d8b72a9521525bb28a6b5d75bba1'
const country = 'ind'

const Weather = (props) => {
    const [searchText, setSearchText] = useState("")

    const getWeather = async() => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText},${country}&appid=${API_KEY}`
            const response = await axios.get(url);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    const searchClicked = () => {
        getWeather();
    }

    return (
        <Container>
            <h1>Current Weather</h1>
            <SearchBox>
                <InputBox name={'search'} type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}></InputBox>
                <Button onClick={searchClicked}>Search</Button>
            </SearchBox>
        </Container>
    )
}

export default Weather;
