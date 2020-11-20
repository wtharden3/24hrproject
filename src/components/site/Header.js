import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
  return (
    <header>
      <Navbar className="header">
        <NavbarBrand href="/">Team Teamwork!!</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="https://github.com/wtharden3/24hrproject">
              Github
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
};
export default Header;
