import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

const NavbarPage = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <Navbar color="primary" dark expand="md">
        <div className="container">
          <NavbarBrand href="/">E-Commerce</NavbarBrand>
          <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {data.map(item => {
                return (
                  <NavItem key={item.id}>
                    <NavLink
                      className="nav-link"
                      to={item.url}
                      activeClassName="active"
                    >
                      {item.name}
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </Fragment>
  );
};

NavbarPage.propTypes = {
  data: PropTypes.array.isRequired
};

export default NavbarPage;
