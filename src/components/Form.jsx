import React, { useState } from "react";
import "./Form.css";

const Forms = () => {
    const [firstname, setFirstname] = useState(""); // Variable d'état

    // Fonction pour mettre à jour la valeur de firstname
    const handleInputChange = (event) => {
        setFirstname(event.target.value);
    };

    return (
        <>
        <div className="globalForm">
        <p>Hello, {firstname} !</p>
            <input type="text" value={firstname} onChange={handleInputChange} />
        </div>
            
        </>
    );
};

export default Forms;


