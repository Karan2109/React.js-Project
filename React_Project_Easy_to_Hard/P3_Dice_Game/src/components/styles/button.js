import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background-color: #000000;
  border-radius: 5px;
  min-width: 220px;
  cursor: pointer;
  border: none;
  font-size: 16px;
  margin-left: 320px;
  border: 1px solid transparent;
  transform: 0.4s vbackground ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transform: 0.3s vbackground ease-in;
  }
`;

export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
