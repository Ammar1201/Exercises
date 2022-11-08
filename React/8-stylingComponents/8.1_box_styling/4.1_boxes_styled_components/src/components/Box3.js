import Box4 from './Box4';
import styled from 'styled-components';

const Box3css = styled.div`
  background-color: lightpink;
  width: 600px;
  height: 300px;
  z-index: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

function Box3() {
  return (
    <Box3css>
      <Box4 />
      <Box4 />
    </Box3css>
  );
}

export default Box3;