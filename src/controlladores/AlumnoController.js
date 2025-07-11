import NocodbControllador from "./NocodbControllador";

class AlumnoController extends NocodbControllador{

    constructor(token){
        super("mrykrxv2aefi9sw", token)
    }

    getAllItems(){
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
        return fetch(this.apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify(alumno)
        }).then(resp => resp.json())
            .then(datos => { 
                console.log(datos)
                return true
            })
            .catch(error => {
                console.log(error)
                return false
            })
    }
}

export default AlumnoController