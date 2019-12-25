import React, { useState, useEffect } from 'react';
import Container from '../styled_components/Container';
import styled from 'styled-components';
import axios from 'axios';
import Button from '../styled_components/Button';

const SearchBox = styled.div`
display : flex;
justify-content: center;
`;

const InputBox = styled.input`
margin-right : 20px;
border-radius : 5px;
border: none;
font-size: 1.6rem;
height: 100%;
padding: 0 1rem;

&:placeholder-shown .city__label {
    //opacity: 0;
    color: red;
}

&:focus{
    outline: none;
    box-shadow: 0px 2px 2px 2px lightskyblue;
}
`;

const Label = styled.label`
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 1.6rem;
    display: block;
    color: black;
    opacity: 1;
`;

const InputGroup = styled.div`
    position: relative;
`;

// const Button = styled.button`
// `


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
                <InputGroup>
                    <InputBox id="search" placeholder="city" name={'search'} type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}></InputBox>
                    <Label className="city__label" htmlFor="search">city</Label>
                </InputGroup>
                <Button primary onClick={searchClicked}>Search</Button>
            </SearchBox>
        </Container>
    )
}

export default Weather;
