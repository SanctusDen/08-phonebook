import { styled } from 'styled-components';

export const Button = styled.button`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 120px;
  margin-top: 20px;
  font-size: 18px;

  border-radius: 50px;
  border: 2px solid #3092b9;
  background: transparent;
  box-shadow: 2px 2px 10px 0px #3092b9, 2px 2px 10px 0px #3092b9;

  &:hover,
  &:focus,
  &:active {
    color: #fff;
    background-color: #3092b9;
    transition: all 400ms ease-in-out;
  }
`;

export const Label = styled.label`
  padding: 20px;
`;
