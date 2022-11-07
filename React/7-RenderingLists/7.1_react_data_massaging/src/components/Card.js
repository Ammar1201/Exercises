import Name from './Name';
import './Card.css';

function Card({person}) {
  return (
    <div className='card'>
      <Name name={person.name} />
      <h3>Born: {person.birthday}.</h3>
      <h3>Loves to eat →</h3>
      <h3>Meat:</h3>
      {person.favoriteFoods.meats.map((meat, index) => {
        if(index === person.favoriteFoods.meats.length - 1) {
          return <h3 key={index}>{meat}.</h3>
        }
        return <h3 key={index}>{meat},</h3>
      })}
      <h3>Fish:</h3>
      {person.favoriteFoods.fish.map((fish, index) => {
        if(index === person.favoriteFoods.fish.length - 1) {
          return <h3 key={index}>{fish}.</h3>
        }
        return <h3 key={index}>{fish},</h3>
      })}
    </div>
  );
}

export default Card;