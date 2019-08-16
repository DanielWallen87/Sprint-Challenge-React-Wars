import React from "react";
import styled from "styled-components";

const HairDisplay = styled.h2`
    font-size: 1.5em;
    color: white;
`

const Hair = props => {
    return (
        <div className="hair">
            <HairDisplay>{props.hair} hair</HairDisplay>
        </div>
    )
}

export default Hair;