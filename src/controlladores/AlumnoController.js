import NocodbControllador from "./NocodbControllador";

class AlumnoController extends NocodbControllador{

    constructor(token){
        super("mrykrxv2aefi9sw", token)
    }

    getAllItems(){
        console.log("token: " + this.token)
          return fetch(this.apiURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        }).then(data => data.json())
            .then(data => data.list)
            .catch(error => console.log(error))
    }

    createItem(alumno){
        fetch(this.apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify(alumno)
        }).then(resp => resp.json())
            .then(datos => { console.log(datos) })
            .catch(error => console.log(error))
    }
}

export default AlumnoController