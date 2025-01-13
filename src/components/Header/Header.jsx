import { FaShareAlt } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <h1 className="logo">Postagram</h1>
      <div className="share-icon">
        <FaShareAlt />
      </div>
    </header>
  );
};

export default Header;
