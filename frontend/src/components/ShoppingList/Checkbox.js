import React from "react";
import styled from "styled-components";

const Checkbox = ({ handleClick, isChecked }) => {
  return (
    <CheckboxContainer onClick={handleClick}>
      <HiddenCheckbox />
      <StyledCheckbox props={isChecked} />
    </CheckboxContainer>
  );
};

export default Checkbox;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 30px;
  height: 30px;
  background: ${({ props }) => (props ? "salmon" : "papayawhip")};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }
`;
