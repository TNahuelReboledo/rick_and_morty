import SearchBar from "./SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import style from './Nav.module.css';

export default function Nav({ onSearch }) {

  const location = useLocation();

  if (location.pathname === "/") {
    
  } else {
    
    return (
      <nav className={style.container}>
        <img className={style.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="" />
        <NavLink to='/About'>
          <button className={style.button}>About</button>
        </NavLink>
        <NavLink to='/Home'>
          <button className={style.button}>Home</button>
        </NavLink>
        <NavLink to='/Favorites'>
          <button className={style.button}>Favorites</button>
        </NavLink>
        <SearchBar onSearch={onSearch} />
      </nav>
    )
  }
};