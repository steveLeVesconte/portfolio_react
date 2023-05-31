import { Link } from "react-router-dom"


const Header = () => {
   
    return (
        <header id="page-header">
        <div id="logo-div">
          <Link className="navlink" to="/"><img src="/images/whatIDoLogo.png" alt="portfolio logo" /></Link>
        </div>
        <div id="top-nav-container">
          <nav>
            <ul className="nav-ul">
              <li><Link className="navlink" to="/">Home</Link></li>
            </ul>
            </nav>
        </div>
    
      </header>
    );
  };
  export default Header;