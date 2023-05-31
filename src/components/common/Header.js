import React from "react";


const Header = () => {
    const activeStyle = { color: "#F15B2A" };
    return (
        <header id="page-header">
        <div id="logo-div">
          <a className="navlink" href="index.html"><img src="/images/whatIDoLogo.png" style={{width:"100%", height: "auto"}} /></a>
        </div>
        <div id="top-nav-container">
          <nav>
            <ul className="nav-ul">
              <li>home</li>
            </ul>
            </nav>
        </div>
    
      </header>
    );
  };
  export default Header;