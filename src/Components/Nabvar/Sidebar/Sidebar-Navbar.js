import { Calendar } from "react-bootstrap-icons"
import { House } from "react-bootstrap-icons"
import { Check } from "react-bootstrap-icons"
import { Exclamation } from "react-bootstrap-icons"
import "../Style/Navbar.css"
import { Link } from "react-router-dom"

const SidebarNavbar = ({sidebarState}) => {
    return (
        <div className={`sidebar ${sidebarState ? 'active' : ''}`}>
            <div className={`sidebarContent ${sidebarState ? "sidebarContentActive" : ""}`}>
                <Link className="linkStyle" to="/">
                    <div className="sidebarPath">
                        <House className="sidebarIcon"/>
                        <h2 className={`${sidebarState ? 'iconActive' : 'iconDeactive'}`}>Home</h2>
                    </div>
                </Link>
                <Link className="linkStyle">
                    <div className="sidebarPath">
                        <Calendar className="sidebarIcon"/>
                        <h2 className={`${sidebarState ? 'iconActive' : 'iconDeactive'}`}>Calendar</h2>
                    </div>
                </Link>
                <Link className="linkStyle" to="/Pending">
                    <div className="sidebarPath">
                        <Exclamation className="sidebarIcon"/>
                        <h2 className={`${sidebarState ? 'iconActive' : 'iconDeactive'}`}>Pending</h2>
                    </div>
                </Link>
                <Link className="linkStyle">
                    <div className="sidebarPath">
                        <Check className="sidebarIcon"/>
                        <h2 className={`${sidebarState ? 'iconActive' : 'iconDeactive'}`}>Done</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SidebarNavbar