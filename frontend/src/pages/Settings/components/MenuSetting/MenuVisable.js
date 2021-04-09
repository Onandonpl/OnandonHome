import React from "react";
import Switch from "react-switch";
import { Label } from "./style";
import { useAlert } from "react-alert";

const MenuVisable = ({ menu, dispatch }) => {
  const alert = useAlert();

  const handleChange = () => {
    dispatch({ type: "SET_VISABLE", payload: { menu: !menu } });
    alert.show("Zmieniono ustawienia menu.");
  };

  return (
    <Label>
      <span>Domyślna widoczność</span>
      <Switch
        onChange={handleChange}
        checked={menu}
        height={15}
        width={30}
        handleDiameter={10}
        uncheckedIcon={false}
        checkedIcon={false}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      />
    </Label>
  );
};

export default MenuVisable;
