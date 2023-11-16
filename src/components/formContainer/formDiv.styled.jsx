import styled from '@emotion/styled';

export const FormContainer = styled.div`
  width: 420px;
  margin-left: auto;
  margin-right: auto;

  backdrop-filter: blur(16px);
  background: transparent;
  display: flex;
  flex-direction: column;
  text-align: center;

  margin-top: 40px;
  margin-bottom: 40px;
  padding: 20px;
  overflow: hidden;

  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 30px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 1);
  border-radius: 12px;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  padding: 4px;
`;
