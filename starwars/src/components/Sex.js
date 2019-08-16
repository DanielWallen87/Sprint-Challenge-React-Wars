import React from "react";
import styled from "styled-components";

const SexDisplay = styled.h2`
    font-size: 1.5em;
    color: white;
`

const Sex = props => {
    return (
        <div className="sex">
            <SexDisplay>{props.sex}</SexDisplay>
        </div>
    )
}

export default Sex;