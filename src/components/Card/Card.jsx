import { useSelector } from "react-redux";

const Card = () => {
    const cards = useSelector((state) => state.game.products)
    console.log(cards)
  return (
    <div>
      { cards && cards.map(({id, name, co2, img}) => (
        <div key={id}>
         <p>{name}</p>
         <p>{co2}</p>
         <img src={img} />
        </div>
      ))}
    </div>
  )
}

export default Card
