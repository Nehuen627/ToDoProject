import "../../Sass/GlobalPadding.css"
import UploadData from "../LS/UploadData";
import TaskSee from "../Visualizator/TaskSee";
import { useState } from "react";

const Pending = () => {
    const [todoTasks, setTodoTasks] = useState(JSON.parse(localStorage.getItem('todoTasks')) || []);

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
            onDelete={() => handleDelete(index)}
            onComplete={() => handleComplete(index)}
        />
    ));

    return (
        <div className="body">{createVisualizator}</div>
    );
}
export default Pending

