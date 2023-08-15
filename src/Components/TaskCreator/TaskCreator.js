import { useState } from "react";
import UploadData from "../LS/UploadData";
import "./TaskCreatorStyle.css"
const TaskCreator = () => {
    const [title, setTitulo] = useState('');
    const [description, setDescripcion] = useState('');
    const [date, setFecha] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        let newTask = {
            Title:title,
            Description:description,
            Date:date,
            State:"todo"
        }
        UploadData(newTask)
        setTitulo('');
        setDescripcion('');
        setFecha('');
    };

    const handleCancel = () => {
        setTitulo('');
        setDescripcion('');
        setFecha('');
    };

    return (
        <form onSubmit={handleSubmit} className="formBox">
            <div>
                <label htmlFor="titulo">Título:</label>
                <input type="text" id="titulo" value={title} onChange={(e) => setTitulo(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="descripcion">Descripción:</label>
                <textarea id="descripcion" value={description} onChange={(e) => setDescripcion(e.target.value)}></textarea>
            </div>
            <div>
                <label htmlFor="fecha">Fecha:</label>
                <input type="date" id="fecha" value={date} onChange={(e) => setFecha(e.target.value)} required/>
            </div>
            <div>
                <button type="submit">Aceptar</button>
                <button type="button" onClick={handleCancel}>Cancelar</button>
            </div>
        </form>
    );
}

export default TaskCreator