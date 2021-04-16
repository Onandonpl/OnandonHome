import React from "react";
import { Container } from "./style";
import { BiDevices, BiNote } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { AiFillPieChart, AiOutlineShoppingCart } from "react-icons/ai";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";

import MenuLink from "../MenuLink/MenuLink";
const Links = () => {
  return (
    <Container>
      <MenuLink link={"/"} text={"Home"} icon={<MdDashboard />} />
      <MenuLink link={"/devices"} text={"Urządzenia"} icon={<BiDevices />} />
      <MenuLink
        link={"/planned"}
        text={"Planowane wydatki"}
        icon={<AiFillPieChart />}
      />
      <MenuLink link={"/budget"} text={"Budżet"} icon={<BiNote />} />
      <MenuLink
        link={"/shopping"}
        text={"Lista zakupów"}
        icon={<AiOutlineShoppingCart />}
      />
      <MenuLink
        link={"/weather"}
        text={"Pogoda"}
        icon={<TiWeatherPartlySunny />}
      />
      <MenuLink link={"/settings"} text={"Ustawienia"} icon={<FiSettings />} />
    </Container>
  );
};

export default Links;
