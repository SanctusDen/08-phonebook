import styled from '@emotion/styled';

export const List = styled.ul`
  width: 100%;
  padding-left: 0;
  list-style: none;

  overflow: auto;
  max-height: 720px;
  height: auto;

  li:nth-of-type(even) {
    background-color: #4e7b9e;
    color: #fff;
  }
  li {
    cursor: pointer;
    &:hover,
    &:focus {
      transform: translate(6px, -6px);
    }
  }
`;
