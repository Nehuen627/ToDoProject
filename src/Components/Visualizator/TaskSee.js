const TaskSee = ({Title, Description, date, state, onDelete, onComplete}) => {

    return (
        <div className="task-display">
            <h2>{Title}</h2>
            <p>{Description}</p>
            <p>{`Fecha límite: ${date}`}</p>
            {state === "todo" ? (
                <div>
                    <button onClick={onDelete}>Eliminar</button>
                    <button onClick={onComplete}>Marcar como terminada</button>
                </div>
            ) : (
                <div>
                    <button onClick={onDelete}>Eliminar del historial</button>
                </div>
            )}
        </div>
    )
}

export default TaskSee