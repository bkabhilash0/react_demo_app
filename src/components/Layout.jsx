import React from "react";

const Layout = (props) => {
  return (
    <div>
      <nav className="nav"></nav>
      <div className="sidebar"></div>
      <div className="content">
        {/* <h1>Hello World</h1> */}
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
