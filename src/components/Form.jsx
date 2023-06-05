import React, { useState } from "react";
import "./Form.css";

const Forms = () => {
    const [firstname, setFirstname] = useState("Mehdy"); 

    
    const handleInputChange = (event) => {
        setFirstname(event.target.value);
    };

    return (
        <>
        <div className="titlePoudlard">
            <h1>Welcome to Poudlard</h1>
        </div>
        <div className="line">
            <p id="diamond-1"></p>
            <p id="rectangle"></p>
            <p id="diamond-2"></p>
        </div>
        <div className="globalForm">
            <p id="colorValue">{firstname}</p>
            <p id="yourName">YOUR NAME</p>
        <input type="text" 
            value={firstname} 
            placeholder="Tapez votre texte ici"
            onChange={handleInputChange} />
        </div>
        </>
    );
};

export default Forms;


