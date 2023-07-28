import GetData from "../LS/GetData";
import UploadData from "../LS/UploadData";
import TaskSee from "../Visualizator/TaskSee";
import { useState, useContext } from "react";
import { SidebarContext } from "../../Context/padding";
const Pending = () => {
    const { sidebarState } = useContext(SidebarContext);
    const [todoTasks, setTodoTasks] = useState(GetData("todo") || []);

    const handleDelete = (index) => {
        const newTodoTasks = todoTasks.filter((_, i) => i !== index);
        setTodoTasks(newTodoTasks);
        localStorage.setItem('todoTasks', JSON.stringify(newTodoTasks));
    }

    const handleComplete = (index) => {
        let taskCompleted = todoTasks[index]
        taskCompleted.State = "finished"
        const newTodoTasks = todoTasks.filter((_, i) => i !== index);
        setTodoTasks(newTodoTasks);
        localStorage.setItem('todoTasks', JSON.stringify(newTodoTasks));
        UploadData(taskCompleted)
    }

    const createVisualizator = todoTasks.map((task, index) => (
        <TaskSee 
            key={index}
            Title={task.Title} 
            Description={task.Description} 
            date={task.Date} 
            index={index} 
            state={task.State}
            onDelete={() => handleDelete(index)}
            onComplete={() => handleComplete(index)}
        />
    ));

    return (
        <div  className={`otherComponent ${sidebarState ? "classWithSidebar" : "classWithoutSidebar"}`}>{createVisualizator}</div>
    );
}
export default Pending

