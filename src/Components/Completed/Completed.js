import { useState } from "react";
import TaskSee from "../Visualizator/TaskSee";
import GetData from "../LS/GetData";
import { useContext } from "react";
import { SidebarContext } from "../../Context/padding";
const Completed = () => {
    const { sidebarState } = useContext(SidebarContext);
    const [doneTasks, setDoneTasks] = useState(GetData("done") || []);

    const handleDelete = (index) => {
        const newDoneTasks = doneTasks.filter((_, i) => i !== index);
        setDoneTasks(newDoneTasks);
        localStorage.setItem('doneTasks', JSON.stringify(newDoneTasks));
    }

    const createVisualizator = doneTasks.map((task, index) => (
        <TaskSee 
            key={index}
            Title={task.Title} 
            Description={task.Description} 
            date={task.Date} 
            index={index} 
            state={task.State}
            onDelete={() => handleDelete(index)}
        />
    ));

    return (
        <div  className={`otherComponent ${sidebarState ? "classWithSidebar" : "classWithoutSidebar"}`}>{createVisualizator}</div>
    );
}

export default Completed