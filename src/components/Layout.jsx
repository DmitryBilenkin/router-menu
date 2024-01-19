import { Outlet } from "react-router-dom";
import Menu from "./Menu";


export default function Layout() {
  return (
     <div>
        <Menu />
        <div className="page">
          <Outlet />
        </div>
      </div>
  )
}
