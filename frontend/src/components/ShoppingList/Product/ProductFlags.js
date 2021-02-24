import React from "react";
import styled from "styled-components";

const ProductFlags = ({ handleFlag, isChecked, listColor }) => {
  return (
    <Flags>
      <CheckboxContainer
        onClick={() => {
          handleFlag(listColor);
        }}
      >
        <HiddenCheckbox defaultChecked={isChecked} />
        <StyledCheckbox props={listColor} checked={isChecked} />
      </CheckboxContainer>
      <CheckboxContainer
        onClick={() => {
          handleFlag("#f1526d");
        }}
      >
        <HiddenCheckbox defaultChecked={isChecked} />
        <StyledCheckboxOne checked={isChecked} />
      </CheckboxContainer>
      <CheckboxContainer
        onClick={() => {
          handleFlag("#d18d98");
        }}
      >
        <HiddenCheckbox defaultChecked={isChecked} />
        <StyledCheckboxTwo checked={isChecked} />
      </CheckboxContainer>
      <CheckboxContainer
        onClick={() => {
          handleFlag("green");
        }}
      >
        <HiddenCheckbox defaultChecked={isChecked} />
        <StyledCheckboxThree checked={isChecked} />
      </CheckboxContainer>
      <CheckboxContainer
        onClick={() => {
          handleFlag("lightblue");
        }}
      >
        <HiddenCheckbox defaultChecked={isChecked} />
        <StyledCheckboxFour checked={isChecked} />
      </CheckboxContainer>
    </Flags>
  );
};

export default ProductFlags;
const Flags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;
const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  overflow: hidden;
  height: 1px;

  width: 1px;
  margin: -1px;

  padding: 0;

  border: 0;
  clip: rect(0 0 0 0);
  white-space: nowrap;
`;

const StyledCheckbox = styled.div`
  width: 10px;
  height: 10px;

  background: ${({ props }) => props};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  transition: all 150ms;
`;
const StyledCheckboxOne = styled.div`
  width: 10px;
  height: 10px;

  background: #f1526d;
  border: 1px solid rgba(0, 0, 0, 0.3);

  border-radius: 3px;
  transition: all 150ms;
`;

const StyledCheckboxTwo = styled.div`
  width: 10px;
  height: 10px;

  background: #d18d98;
  border: 1px solid rgba(0, 0, 0, 0.3);

  border-radius: 3px;
  transition: all 150ms;
`;
const StyledCheckboxThree = styled.div`
  width: 10px;
  height: 10px;

  background: green;
  border: 1px solid rgba(0, 0, 0, 0.3);

  border-radius: 3px;
  transition: all 150ms;
`;
const StyledCheckboxFour = styled.div`
  width: 10px;
  height: 10px;

  background: lightblue;
  border: 1px solid rgba(0, 0, 0, 0.3);

  border-radius: 3px;
  transition: all 150ms;
`;
