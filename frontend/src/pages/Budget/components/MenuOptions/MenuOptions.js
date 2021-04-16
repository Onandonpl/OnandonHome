import React from "react";
import AddItem from "../AddItem/AddItem";
import ChooseDate from "../ChooseDate/ChooseDate";
const MenuOptions = ({ type }) => {
  const renderOptions = (type) => {
    switch (type) {
      case "add":
        return <AddItem />;
      case "day":
        return <ChooseDate />;
      case "hide":
        return null;

      default:
        return null;
    }
  };
  return <div>{renderOptions(type)}</div>;
};

export default MenuOptions;
