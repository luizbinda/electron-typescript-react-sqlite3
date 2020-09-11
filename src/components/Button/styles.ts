import styled from 'styled-components';

export const Container = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 6px;
  button {
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 4px;
    background-color: rgba(0, 55, 205);
    font-weight: bold;
    border: none;
    cursor: pointer;
    color: #fff;
    :hover {
      background-color: rgba(0, 45, 255);
    }
  }
`;
