import Box2 from './Box2';
import styled from 'styled-components';

const Box1css = styled.div`
  background-color: lightgreen;
  width: 800px;
  height: 500px;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Box1() {
  return (
    <Box1css>
      <Box2 />
    </Box1css>
  );
}

export default Box1;