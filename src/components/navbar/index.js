import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const NavbarPage = props => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <Navbar color="primary" dark expand="md">
        <div className="container">
          <NavbarBrand href="/">E-Commerce</NavbarBrand>
          <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Product</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </Fragment>
  );
};

NavbarPage.propTypes = {};

export default NavbarPage;
