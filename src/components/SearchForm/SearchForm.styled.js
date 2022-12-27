import styled from 'styled-components';

export const FormSearch = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;
export const Input = styled.input`
  width: 450px;
  padding: 15px;
  border: 1px solid 'grey';
  border-radius: 5px;
  font-size: 14px;
  color: 'black';
`;

export const SubmitButton = styled.button`
  width: 100px;
  padding: 15px;
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  color: black;
  background-color: paleTurquoise;
  margin-left: 10px;
  :hover {
    background-color: turquoise;
  }
`;
