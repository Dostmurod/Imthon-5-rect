import React from "react";
import "./main.scss";
import {Link} from "react-router-dom"
import Users from "../Users/index";
const index = () => {
  return (
    <>
      <Link to="/repos">
        <h3>Repos</h3>
      </Link>
    </>
  );
};

export default index;
