import React, { useState } from "react";
import "./Form.css";

const Forms = () => {
    const [firstname, setFirstname] = useState("jeune sorcier"); 

    // Fonction pour mettre à jour la valeur de firstname
    const handleInputChange = (event) => {
        setFirstname(event.target.value);
    };

    return (
        <>
        <div className="globalForm">
            <div className="globalP">
            <p>Hello,</p>
            <p className="colorValue">{firstname} !</p>
            </div>
        
            <input type="text" 
            value={firstname} 
            placeholder="Tapez votre texte ici"
            onChange={handleInputChange} />
        </div>
            
        </>
    );
};

export default Forms;


