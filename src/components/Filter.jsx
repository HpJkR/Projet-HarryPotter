import "./Filter.css"

const FilterArray = ({handleFilter, handleFilterType, handleReset}) => {
   
    return (
        <>
        <div className="buttonGlobal">
        <button onClick={() => handleFilter("homme")}>Homme</button>
        <button onClick={() => handleFilter("femme")}>Femme</button>
        <button onClick={() => handleFilterType("méchant")}>Méchant</button>
        <button onClick={() => handleFilterType("gentil")}>Gentil</button>
        </div>
        <div className="reset">
<button onClick={handleReset}>Reset</button>
        </div>
        

        </>
    )
};

export default FilterArray;