import "./Filter.css"

const FilterArray = ({handleFilter, handleFilterType, handleReset}) => {
   
    return (
        <>
        <div className="titleFilter">
        <h3>Choisissez vos filtres :</h3>
        </div>
        
        <div className="buttonGlobal">
        <button onClick={() => handleFilter("homme")}>Homme</button>
        <button onClick={() => handleFilter("femme")}>Femme</button>
        <button onClick={() => handleFilterType("méchant")}>Méchant</button>
        <button onClick={() => handleFilterType("gentil")}>Gentil</button>
    </div>
        <div className="reset">
<button onClick={handleReset}>RESET</button>
        </div>
        
        

        </>
    )
};

export default FilterArray;