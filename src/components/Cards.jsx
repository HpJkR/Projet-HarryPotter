import "./Cards.css"

const Card = (props) => {
  const {list} = props;

  return (
      <>
      {list.map((item, index) => (
          <div className="cardGlobal" key={index}>
            <img src={item.imgSrc} alt={item.name} />
            <div className="cardText">
            <h3 className={`cardTitle-${index}`}>{item.name}</h3>
            <p>{item.description}</p>
            </div>
           
          </div>
      ))}
  </>
  );
}

export default Card;
