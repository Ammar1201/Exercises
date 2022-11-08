import Box3 from './Box3';
import styled from 'styled-components';

const Box2css = styled.div`
  background-color: lightblue;
  width: 700px;
  height: 400px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Box2() {
  return (
    <Box2css>
      <Box3 />
    </Box2css>
  );
}

export default Box2;