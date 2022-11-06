import './Card.css';

function Card(props) {
  return (
    <div className='card'>
      <img src={props.src} alt=''></img>
      <div className='card-inner'>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a href={props.shareLink}>SHARE</a>
        <a href={props.exploreLink}>EXPLORE</a>
      </div>
    </div>
  );
}

export default Card;