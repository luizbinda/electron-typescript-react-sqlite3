import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Form = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  h1 {
    margin-bottom: 40px;
  }

  textarea {
    width: 100%;
    height: 80px;
    padding: 10px;
    border-radius: 5px;
    background-color: #eee;
    font-weight: bold;
    border: none;
    margin: 15px 0;
  }

  a {
    margin-top: 20px;
    text-decoration: none;
    color: #eee;
    font-weight: bold;
  }
`;
