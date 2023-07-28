
const GetData = (type) => {
    if(type === "done") {
        let doneArray = JSON.parse(localStorage.getItem('doneTasks'))
        return doneArray
    } else if (type === "todo"){
        let todoArray = JSON.parse(localStorage.getItem('todoTasks'))
        return todoArray
    } else {
        console.log("getdata invalid")
    }
}

export default GetData