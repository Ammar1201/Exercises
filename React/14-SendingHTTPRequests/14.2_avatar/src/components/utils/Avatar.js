import './Avatar.css';

const Avatar = ({name, imgSrc}) => {
  return ( 
    <div className="avatar">
      <h4>{name}</h4>
      <img src={imgSrc} alt="avatar" />
    </div> 
  );
}
 
export default Avatar;