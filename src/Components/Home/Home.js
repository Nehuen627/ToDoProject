import TaskCreator from "../TaskCreator/TaskCreator"
import React, { useContext } from 'react';
import { SidebarContext } from "../../Context/padding";
const Home = () => {
    const { sidebarState } = useContext(SidebarContext);

    return (
        <div className={`otherComponent ${sidebarState ? "classWithSidebar" : "classWithoutSidebar"}`}>
            <h1>home</h1>
            <TaskCreator/>
        </div>
    )
}

export default Home