import Child from './Child';
import Wrapper from './Wrapper';
import './Mother.css';
import Balloon from './Balloon';

function Mother() {
  const kids= [
    { name: 'Ori', color: 'red' },
    { name: 'Ron', color: 'blue' },
    { name: 'Sigalit', color: 'green' },
    { name: 'Ruti', color: 'yellow' },
    { name: 'Alon', color: 'purple' },
  ]
  
  return (
    <Wrapper>
      <h1>A Tale of Five Balloons</h1>
      <div className='wrapper'>
        {/* <Child name={kids[0].name} color={kids[0].color} />
        <Child name={kids[1].name} color={kids[1].color} />
        <Child name={kids[2].name} color={kids[2].color} />
        <Child name={kids[3].name} color={kids[3].color} />
        <Child name={kids[4].name} color={kids[4].color} /> */}
        <Child>
          <h3>{kids[0].name}</h3>
          <Balloon>{kids[0].color}</Balloon>
        </Child>
        <Child>
          <h3>{kids[1].name}</h3>
          <Balloon>{kids[1].color}</Balloon>
        </Child>
        <Child>
          <h3>{kids[2].name}</h3>
          <Balloon>{kids[2].color}</Balloon>
        </Child>
        <Child>
          <h3>{kids[3].name}</h3>
          <Balloon>{kids[3].color}</Balloon>
        </Child>
        <Child>
          <h3>{kids[4].name}</h3>
          <Balloon>{kids[4].color}</Balloon>
        </Child>
      </div>
    </Wrapper>
  );
}

export default Mother;