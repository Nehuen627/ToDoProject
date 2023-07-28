
import { NavLink } from "react-router-dom";
import { PersonCircle} from "react-bootstrap-icons";
import { Bell } from "react-bootstrap-icons";
import { List } from "react-bootstrap-icons";
import SidebarNavbar from "../Sidebar/Sidebar-Navbar";
import "../Style/Navbar.css"
import { useContext } from "react"
import { SidebarContext } from "../../../Context/padding";


const HorizontalNavbar = () => {
    const {sidebarState, setSidebarState} = useContext(SidebarContext);
    const SidebarToggle = () => {
        setSidebarState(!sidebarState);
        
    }
    return (
        <div className="menuNav">
            <div className="Nabvar-horizontal">
                <div className="paddingIcon">
                    <List className="navIcon" onClick={SidebarToggle}/>
                </div>
                <div>
                    <NavLink to="" className="paddingIcon"><Bell className="navIconSmall"/></NavLink>
                    <NavLink to="" className="paddingIcon account"><PersonCircle className="navIcon"/></NavLink>
                </div>
            </div>
            <SidebarNavbar sidebarState={sidebarState}/>
        </div>
    )
}
export default HorizontalNavbar