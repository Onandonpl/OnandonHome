import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const FormContainer = styled.div``;
export const Form = styled.form`
  height: 65px;
  margin-left: 10px;
  display: flex;
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

export const Label = styled.label`
  font-size: 12px;
`;
export const FormError = styled.p`
  position: absolute;
  bottom: -10px;
  left: 0;
  font-size: 10px;
  color: red;
`;
