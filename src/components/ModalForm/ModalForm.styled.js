import styled from 'styled-components';
// import { TextField} from '@mui/material';

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  text-align: center;
  margin: 0px;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;


`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black color */
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;



export const SecondTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  text-align: center;
  margin: 0px;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
`;

export const Form = styled.form`
  width: 470px;
  display: flex;
  gap: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  padding: 20px 40px;
  border-radius: 5px;
  background-color: white;
`;
export const Field = styled.input`
  width: 100%;
  background-color: transparent;

  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  &:focus-within {
    box-shadow: 0 3px 15px rgb(43, 46, 48);
    border-radius: 5px;
    color: #000;
  }

  &::placeholder {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  background-color: transparent;
  resize: none;
  height: 150px;

  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  &:focus-within {
    box-shadow: 0 3px 15px rgb(43, 46, 48);
    border-radius: 5px;
    color: #000;
  }

  &::placeholder {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;
  }
`

export const Select = styled.select`
  width: 100%;
  background-color: #f2f2f2;
  background-color: transparent;
  color: #fff;
    font-size: 16px;
    font-weight: 700;
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;


  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  &:focus-within {
    box-shadow: 0 3px 15px rgb(43, 46, 48);
    border-radius: 5px;
    /* color: #fff; */
  }
  option {
    background-color: #ccc;
  }

`;

export const Label = styled.label`
color: #fff;
    font-size: 16px;
    font-weight: 700;
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;
`
