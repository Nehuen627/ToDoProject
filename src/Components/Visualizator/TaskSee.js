

const TaskSee = ({Title, Description, date, onDelete, onComplete}) => {
    return (
        <div className="task-display">
            <h2>{Title}</h2>
            <p>{Description}</p>
            <p>{`Fecha límite: ${date}`}</p>
            <button onClick={onDelete}>Eliminar</button>
            <button onClick={onComplete}>Marcar como terminada</button>
        </div>
    )
}

export default TaskSee
