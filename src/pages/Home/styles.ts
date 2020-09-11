import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Lista = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  ul {
    list-style: none;
    width: 100%;
    margin-top: 40px;
    overflow: auto;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 10px 20px;
    border: 1px solid #fff;
    border-radius: 3px;
    margin-bottom: 5px;
    div {
      display: flex;
      flex-direction: column;
      max-width: 90%;
    }
    button {
      width: 30px;
      height: 30px;
      border-radius: 5px;
      border: none;
      background-color: rgba(255, 45, 0);
      color: #fff;
      cursor: pointer;

      :hover {
        background-color: #fff;
        color: rgba(255, 45, 0);
      }
    }
  }
`;
