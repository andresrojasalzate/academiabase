import { useContext, useEffect, useState } from "react";
import UserContext from "./contextos/UserContext.js";
import NocodbControllador from "./controlladores/NocodbControllador.js";

function Cursos() {

    const { nombre, token } = useContext(UserContext);
    const [cursos, setCursos] = useState([])
    const cursosController = new NocodbControllador("m7bjwlzx0hx3yfg", token);

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
