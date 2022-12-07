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
    <div className="navigationcontainer"> 
    <div className="navigationcontainertop">
      <div className="logo">
        <Link to="/">
        <img alt="Specula-Logo" width="100" height="60" src={logo} />
        </Link>
      </div>
      <div className="searchbar">
        <div className="searchicon">{searchIcon}</div>
        <input
          className="searchinput"
          placeholder="Search Product . . ."
        ></input>
        <Link to="/shoppingbagpage">
        <div className="icon">{shoppingCartIcon}</div>
        </Link>
        <Link>
        <div className="icon">{userIcon}</div>
        </Link>
      </div>
      </div> 
      <div className="navigationcontainerbottom">
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
