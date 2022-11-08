import styled from 'styled-components';

const Order = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: ${(props) => props.color};
  text-align: center;
  padding: 5px 10px;
  margin-top: 10px;

  & img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  & h4 {
    margin-bottom: 10px;
  }
`;

export default Order;