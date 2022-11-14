import Avatar from "./Avatar";
import './AvatarsMap.css';


const AvatarsMap = ({avatars}) => {

  return ( 
    <div className="container">
      {avatars.map(({name, picture}) => {
        return <Avatar key={name.first + name.last} name={`${name.title} ${name.first} ${name.last}`} imgSrc={picture.large} />
      })}
    </div> 
  );
}
 
export default AvatarsMap;