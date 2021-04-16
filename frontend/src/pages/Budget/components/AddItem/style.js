import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px 5px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Form = styled.form`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const InputContainer = styled.div`
  position: relative;
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled.input`
  margin: 5px 0;
  padding: 5px;
  appearance: textfield;

  border: 1px solid #b3b3b3;
  border-radius: 10px;
  &:hover {
    border-color: #2693e6;
  }
  &:focus {
    border-color: #2693e6;
  }
`;

export const Submit = styled.button`
  width: 100px;
  margin: 0 5px;
  padding: 5px;
  border: 1px solid #b3b3b3;
  border-radius: 10px;

  font-weight: 400;
  transition: linear 0.1s;
  cursor: pointer;
  &:hover {
    border-color: #392ccd;
  }
  &:focus {
    border-color: #392ccd;
  }
`;

export const Select = styled.select`
  width: 100%;
  margin: 5px 0;
  padding: 5px 15px;

  border: 1px solid #b3b3b3;
  border-radius: 10px;
  &:hover {
    border-color: #2693e6;
  }
  &:focus {
    border-color: #2693e6;
  }
`;
export const FormError = styled.p`
  position: absolute;
  bottom: -10px;
  left: 0;
  font-size: 10px;
  color: red;
`;
