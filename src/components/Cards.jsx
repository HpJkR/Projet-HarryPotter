import './Cards.css'

const Cards = ({ cardList }) => {
  return (
    <div className='cardGlobal'>
      <img 
        src={cardList.imgSrc}
        alt="Image de Harry Potter"
      />
      <p>{cardList.name}</p>
    </div>
  )
}

export default Cards
