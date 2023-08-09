import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
`;

export const Text = styled.div`
  flex-grow: 1;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  /* color: #f44336; */
  color: #000;

  &:hover {
    background-color: #e2e5e8;
  }
  &.active {
    background-color: #bdbdbd;
  }
`;

export const Checkbox = styled.input`
  border: none;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;

  outline: none;
  accent-color: rgb(221 52 23);
`;
