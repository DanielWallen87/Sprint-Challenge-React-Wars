import React from "react";
import styled from 'styled-components';

const GridContainer = styled.div`
    display: inline-grid;
    grid-template-columns: auto auto auto;
    background-color: transparent;
    padding: 10px;
`

const GridItem = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
`

const Card = props => {
    return (
        <GridContainer>
            <GridItem>
            <h1>{props.info.name}</h1> 
            <p>Gender: {props.info.gender}</p>
            <p>Height: {props.info.height} inches</p>
            <p>Weight: {Math.floor(props.info.mass * 2.2)} lbs</p>
            <p>Hair Color: {props.info.hair_color}</p>
            <p>Eye Color: {props.info.eye_color}</p>
            </GridItem>
        </GridContainer>
    )
}

export default Card;
