import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background-color: #fff;
  margin: 10px;
`;

export const Title = styled.p`
  font-size: 25px;
`;
export const Description = styled.p`
  font-size: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InputContainer = styled.div`
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
  margin: 5px 0;
  padding: 5px;
  border: 1px solid #b3b3b3;
  border-radius: 10px;

  font-weight: 400;
  transition: linear 0.1s;
  cursor: pointer;
  &:hover {
    border-color: #2693e6;
  }
  &:focus {
    border-color: #2693e6;
  }
`;

export const Label = styled.label`
  font-size: 12px;
`;
export const FormError = styled.p`
  font-size: 10px;
  color: red;
`;
