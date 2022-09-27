import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./header.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Header = ({ heading, home }) => {
  useEffect(() => {}, [home]);

  return (
    <Container className="headerContainer">
      <h5>{heading}</h5>
      {home === "true" ? (
        <Link to="/create">
          <Button>Create</Button>
        </Link>
      ) : (
        <Link to="/">
          <Button>Home</Button>
        </Link>
      )}
    </Container>
  );
};

export default Header;
