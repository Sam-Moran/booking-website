import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "@reach/router";
// import { getPitches, getActivites } from "../../api.js";
// import styles from "./Header.module.css";
import logo from "../../Images/logo.png";

class Header extends Component {
  state = {
    pitches: [],
    activities: []
  };
  render() {
    // const { pitches, activities } = this.state;
    return (
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Link to="/">
          <Navbar.Brand>
            <img
              alt="Logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {" Super Camping Holidays"}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              title="Campsites"
              id="basic-nav-dropdown"
              className="nav-link"
            >
              <Link to="/sites/1">Ullswater</Link>
              <NavDropdown.Divider />
              <Link to="/sites/2">New Forest</Link>
              <NavDropdown.Divider />
              <Link to="/sites/3">Norfolk</Link>
              <NavDropdown.Divider />
              <Link to="/sites/4">Cornwall</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  //   componentDidMount() {
  //     this.fetchPitches();
  //     this.fetchActivites();
  //   }

  //   fetchPitches = () => {
  //     getPitches(this.props.q).then(pitches => {
  //       this.setState({ pitches });
  //     });
  //   };

  //   fetchActivites = () => {
  //     getActivites(this.props.q).then(activities => {
  //       this.setState({ activities });
  //     });
  //   };
}

export default Header;
