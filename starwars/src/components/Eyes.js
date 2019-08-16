import React from "react";
import styled from "styled-components";

const EyesDisplay = styled.h2`
    font-size: 1.5em;
    color: white;
`

const Eyes = props => {
    return (
        <div className="eyes">
            <EyesDisplay>{props.eyes} eyes</EyesDisplay>
        </div>
    )
}

export default Eyes;