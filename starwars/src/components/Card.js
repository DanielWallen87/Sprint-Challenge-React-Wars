import React from "react";
import styled from "styled-components";
import Name from "./Name";
import Hair from "./Hair";
import Eyes from "./Eyes";
import Sex from "./Sex";

const CardBorder = styled.div`
    border: 2px solid white;
`

const Card = props => {
    return (
        <CardBorder>
            <Name name={props.name} />
            <Hair hair={props.hair} />
            <Eyes eyes={props.eyes} />
            <Sex sex={props.sex} />
        </CardBorder>
    )
}

export default Card;
