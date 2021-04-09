import React from "react";
import { SingleLink } from "./style";

const MenuLink = ({ link, text, icon }) => {
  return (
    <SingleLink
      to={link}
      activeStyle={{
        fontWeight: "bold",
        color: "#392ccd",
      }}
      exact={true}
    >
      <p>{icon}</p>
      {text}
    </SingleLink>
  );
};

export default MenuLink;
