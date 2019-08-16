import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const CreateCard = () => {
    const [name, setName] = useState();
    const [hair, setHair] = useState();
    const [eyes, setEyes] = useState();
    const [sex, setSex] = useState();

    useEffect(() => {
        axios
            .get('https://swapi.co/api/people/1')
            .then((response => {
                setName(response.data.name);
                setHair(response.data.hair_color);
                setEyes(response.data.eye_color);
                setSex(response.data.gender);
            }))
    }, []);

    return (
        <>
            <div className="info">
                <Card name = {name} hair = {hair} eyes = {eyes} sex = {sex} />
            </div>
        </>
    )
}

export default CreateCard;