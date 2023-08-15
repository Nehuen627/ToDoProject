import "./TaskSeeStyle.css"
const TaskSee = ({Title, Description, date, state, onDelete, onComplete}) => {

    return (
        <div className="taskDisplay">
            <h2>{Title}</h2>
            <p className="description">{Description}</p>
            <p>{`Fecha límite: ${date}`}</p>
            {state === "todo" ? (
                <div>
                    <button onClick={onDelete} className="delete">Eliminar</button>
                    <button onClick={onComplete} className="complete">Marcar como terminada</button>
                </div>
            ) : (
                <div>
                    <button onClick={onDelete} className="delete">Eliminar del historial</button>
                </div>
            )}
        </div>
    )
}

export default TaskSee