import React, { useState, useEffect } from "react";
import { useSettings } from "../../context/SettingsContext";
import { Container } from "./style";

import Logo from "../Logo/Logo";
import Links from "./components/Links/Links";
import HideRevealButton from "./components/HideRevealButton/HideRevealButton";

const NavBar = () => {
  const settings = useSettings();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setHide(settings.menu);
  }, [settings.menu]);

  const handleHide = () => {
    setHide(!hide);
  };

  return (
    <>
      <Container hide={hide}>
        <Logo />
        <Links />
      </Container>
      <HideRevealButton hide={hide} handleHide={handleHide} />
    </>
  );
};

export default NavBar;
