import { useContext, useEffect, useState } from "react";
import UserContext from "./contextos/UserContext.js";
import { useNavigate } from "react-router-dom";
import AlumnoController from "./controlladores/AlumnoController.js";

function NuevoAlumno(){

    const { token } = useContext(UserContext);
    const alumnoControllador = new AlumnoController(token)
    const navigate = useNavigate()
    const [nombre, setNombre] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")

    function enviarAlumno(e){
        e.preventDefault();
        const nuevoAlumno = {
            Nombre:nombre,
            Apellidos: apellidos,
            Email:email,
            Telefono: telefono,
            cursoId: 1
        }
        
        alumnoControllador.createItem(nuevoAlumno).then(resultado =>{
            resultado ? navigate("/alumnos") : alert("Ha habido un error al crear el alumno")
        })
        
    }


    return (
        <>
        <form onSubmit={enviarAlumno}>
            <p>Nombre</p>
            <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
            <br />

            <p>Apellidos</p>
            <input type="text" value={apellidos} onChange={(e)=>setApellidos(e.target.value)} />
            <br />

            <p>Email</p>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <br />

            <p>Telefono</p>
            <input type="text" value={telefono} onChange={(e)=>setTelefono(e.target.value)} />
            <br />

            <button type="submit">ENVIAR ALUMNO</button>
            
        </form>
        
        
        </>
    )
}

export default NuevoAlumno;