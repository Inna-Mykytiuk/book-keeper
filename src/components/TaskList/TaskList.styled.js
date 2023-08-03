import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  &:not(:first-child) {
    border-top: 1px solid #fff;
  }
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  /* min-height: 100vh; */
  gap: 24px;
`;
