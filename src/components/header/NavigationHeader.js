import logo from "../../assets/images/logo.png";
import "./NavigationHeader.css";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

const NavigationHeader = () => {
  const searchIcon = <BsSearch />;
  const shoppingCartIcon = <FaShoppingCart />;
  const userIcon = <FaUser />;

  return (
    <div className="navigationheader">
      <div className="navigationheadertop">
        <div className="navigationlogoandsearch">
          <div className="imagecontainer">
            <img alt="Specula-Logo" width="100" height="60" src={logo} />
          </div>   
          <form>
            <div className="searchcontainer">
            <i className="searchicon">{searchIcon}</i>
              <input
                className="searchinput"
                placeholder="Search Product . . ."
              ></input>
            </div>
          </form>
          <div className="icon">{shoppingCartIcon}</div>
          <div className="icon">{userIcon}</div>
        </div>
  
      </div>
      <div className="navigationheaderbottom">
        <div className="navigationitems">
          <Link className="navigationitem" to="/">
            Home
          </Link>
          <Link className="navigationitem" to="/productlistpage">
            Products
          </Link>
          <Link className="navigationitem" to="/aboutus">
            About us
          </Link>
          <Link className="navigationitem" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationHeader;
