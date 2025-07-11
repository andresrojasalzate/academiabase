import { useContext, useEffect, useState } from "react";
import UserContext from "./contextos/UserContext.js";
import { data, Link } from "react-router-dom";
import AlumnoController from './controlladores/AlumnoController.js'

function Alumnos() {

    const { token } = useContext(UserContext);
    const [alumnos, setAlumnos] = useState([])
    const alumnoController = new AlumnoController(token);

    useEffect(() => {
        alumnoController.getAllItems().then(data => setAlumnos(data))
    }, [])
    
    return (

        <>
            <h3>ALUMNOS </h3>
            <hr />
            <ul>
                {alumnos.map(alumno => <li key={alumno.Id}>{alumno.Nombre}</li>)}
            </ul>
            <hr />
            <Link to={`/nuevo-alumno`}> Nuevo alumno</Link>{' '}
        </>
    )
}

export default Alumnos;
