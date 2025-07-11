import NocodbControllador from "./NocodbControllador";

class CursoController extends NocodbControllador {
    constructor(token) {
        super("m7bjwlzx0hx3yfg", token)
    }

    getAllItems() {
        return fetch(this.apiURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        }).then(data => data.json())
            .then(data => data.list)
            .catch(error => console.error(error))
    }
}

export default CursoController