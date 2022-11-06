import Balloon from './Balloon';

function Child(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <Balloon color={props.color} />
    </div>
  );
}

export default Child;