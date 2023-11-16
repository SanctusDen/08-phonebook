import styled from '@emotion/styled';

export const Item = styled.li`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 12px;
`;
export const DeleteBtn = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 8px;

  border: 1px solid black;
  font-weight: 600;
  cursor: pointer;
  background-color: inherit;
  color: black;
  margin-right: 6px;
  &:hover,
  &:focus {
    color: white;
  }
`;
export const Name = styled.p`
  display: inline-block;
`;
