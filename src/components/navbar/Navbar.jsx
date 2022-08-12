import "./navbar.scss";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const Navbar = () => {
  return <div className="navbar">
    <div className="wrapper">
      <div className="items">
        <div className="item"><span>Sign out</span> <ExitToAppIcon/></div>
      </div>
    </div>
  </div>;
};

export default Navbar;
