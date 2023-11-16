import styled from '@emotion/styled';

export const ContactsForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

export const Label = styled.label`
  margin-bottom: 12px;
`;

export const Field = styled.input`
  margin-bottom: 20px;
  border: none;
  background: inherit;
  border-bottom: 2px solid #000;
  text-align: center;
  outline: none;

  font-size: 22px;
`;

export const SubmitBtn = styled.button`
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  height: 30px;
  border-radius: 8px;
  border: 2px solid black;
  font-weight: 600;
  cursor: pointer;
  color: black;
  background-color: inherit;

  &:hover,
  &:focus {
    color: white;
    transition: all 0.3ms cubic-bez;
  }
`;
