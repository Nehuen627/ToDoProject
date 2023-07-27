import "./localStorage.css"

const UploadData = (task) => {
    let todoTasks = JSON.parse(localStorage.getItem('todoTasks')) || [];
    let doneTasks = JSON.parse(localStorage.getItem('doneTasks')) || [];

    if(task.State === "todo"){
        todoTasks.push(task);
        localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
    }else if (task.State === "finished"){
        doneTasks.push(task)
        localStorage.setItem('doneTasks', JSON.stringify(doneTasks));
    }else{
        return
    }
}
export default UploadData;