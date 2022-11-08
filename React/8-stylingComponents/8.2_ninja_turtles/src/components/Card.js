import styled from 'styled-components';

const Card = styled.div`
  width: 250px;
  height: 400px;
  border: 1px solid black;
  padding-bottom: 10px;
  background-color: yellow;

  & img {
    width: 250px;
    height: 150px;
  }

  & h3 {
    margin-bottom: 20px;
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  & button {
    background: #333;
    color: white;
    font-size: 1rem;
    padding: 5px 10px;
  }

  & button:hover {
    color: red;
  }
`

export default Card;