import { useContext, useEffect, useState } from "react";
import UserContext from "./contextos/UserContext.js";
import CursoController from './controlladores/CursoController.js'

function Cursos() {

    const {token} = useContext(UserContext);
    const [cursos, setCursos] = useState([])
    const cursosController = new CursoController(token);

    useEffect(() => {
        cursosController.getAllItems().then(data => setCursos(data))
    }, [])


    return (
        <>
            <h3>CURSOS </h3>
            <hr />
            <ul>
                {cursos.map(curso => <li key={curso.Id}>{curso.Nombre}</li>)}
            </ul>
        </>
    )
}

export default Cursos;
