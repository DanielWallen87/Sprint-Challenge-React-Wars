import React from "react";
import styled from "styled-components";

const NameDisplay = styled.h1`
    font-size: 2em;
    font-weight: bold;
    color: white;
`

const Name = props => {
    return (
        <div className="name">
            <NameDisplay>{props.name}</NameDisplay>
        </div>
    )
}

export default Name;