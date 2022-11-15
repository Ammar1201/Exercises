import Avatar from "./Avatar";
import './AvatarsMap.css';


const AvatarsMap = ({avatars, inputValue}) => {

  const displayAvatars = () => {
    const filteredAvatars = avatars.filter(avatar => {
      const {name} = avatar;
      const str = name.title + name.first + name.last;
      if(str.includes(inputValue) || !inputValue) {
        return avatar;
      }
    });

    return filteredAvatars.map(({name, picture}) => {
      return <Avatar key={name.first + name.last} name={`${name.title} ${name.first} ${name.last}`} imgSrc={picture.large} />
    })
  };

  return ( 
    <div className="container">
      {displayAvatars()}
    </div> 
  );
}
 
export default AvatarsMap;