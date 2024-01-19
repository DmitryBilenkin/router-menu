import { NavLink } from "react-router-dom";

function Menu() {

    const onActiveHandler = ({isActive}) => (isActive ? 'menu__item-active' : '');

    return(
        <nav className="menu">
            <div className="menu__item">
                <NavLink className={onActiveHandler} to="/">Главная</NavLink>
            </div>
            <div className="menu__item">
                <NavLink className={onActiveHandler} to="/drift">Дрифт-такси</NavLink>
            </div>
            <div className="menu__item">
                <NavLink className={onActiveHandler} to="/timeattack">Time Attack</NavLink>
            </div>
            <div className="menu__item">
                <NavLink className={onActiveHandler} to="/forza">Forza Karting</NavLink>
            </div>       
     </nav>
    )   
  }
  
export default Menu;  