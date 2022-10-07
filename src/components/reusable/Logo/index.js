import React from "react";
import { Link } from "react-router-dom";
import Span from "../Span";

export default function Logo() {
  return (
    <Link to="/">
      DO IT <Span style={{ color: "red" }}>NOTES</Span>
    </Link>
  );
}
