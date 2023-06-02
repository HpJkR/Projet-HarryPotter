import "./Cards.css"

const Card = (props) => {
  const {list} = props;

  return (
      <>
      {list.map((item, index) => (
          <div className="cardGlobal" key={index}>
          <h3>{item.name}</h3>
          <img src={item.imgSrc} alt={item.name} />
          <p>{item.description}</p>
          </div>
      ))}
  </>
  );
}

export default Card;
