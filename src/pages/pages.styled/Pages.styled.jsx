import { styled } from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 120px;
  margin-top: 20px;
  font-size: 18px;
  color: #005261;

  border-radius: 50px;
  border: 2px solid #4e7b9e;
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
  display: flex;
  color: white;
  text-align: center;
  padding: 12px;
  width: 300px;
  flex-direction: column;
  align-items: center;
`;

export const Div = styled.div`
  width: 420px;
  margin-left: auto;
  margin-right: auto;

  backdrop-filter: blur(16px);
  background: transparent;
  display: flex;
  flex-direction: column;
  text-align: center;

  margin-top: 32px;
  margin-bottom: 32px;
  padding: 20px;
  overflow: hidden;

  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 30px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 1);
  border-radius: 12px;
  align-items: center;
`;

export const LinkBtn = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 120px;
  margin-top: 20px;
  font-size: 18px;
  color: #005261;

  border-radius: 50px;
  border: 2px solid #4e7b9e;
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

export const LinkBox = styled.div`
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  text-align: center;

  padding: 20px;
  overflow: hidden;

  border-radius: 12px;
`;

export const ButtonLogOut = styled.button`
  cursor: pointer;
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 120px;

  font-size: 18px;
  color: #005261;

  border-radius: 50px;
  border: 2px solid #4e7b9e;
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

export const DivLogOut = styled.div`
  display: flex;
  color: white;
  gap: 20px;
  p {
    cursor: pointer;
  }
`;
