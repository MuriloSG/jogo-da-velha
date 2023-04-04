import React from "react";
import Logo from '../../objects/Logo/index';
import Sobre from '../../objects/Sobre/index';
import Menu from '../../objects/Menu/index';
import './styles.css';
const Header = () => (
    <header className="header">
      <Logo />
      <Sobre />
      <Menu />
    </header>
);

export default Header;