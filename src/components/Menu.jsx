import { NavLink } from "react-router-dom";

function Menu() {

    const onActiveHandler = ({isActive}) => (isActive ? 'menu__item menu__item-active' : 'menu__item');

    return(
        <nav className="menu">            
          <NavLink className={onActiveHandler} to="/">Главная</NavLink>
          <NavLink className={onActiveHandler} to="/drift">Дрифт-такси</NavLink> 
          <NavLink className={onActiveHandler} to="/timeattack">Time Attack</NavLink>     
          <NavLink className={onActiveHandler} to="/forza">Forza Karting</NavLink>  
        </nav>
    )   
  }
  
export default Menu;  