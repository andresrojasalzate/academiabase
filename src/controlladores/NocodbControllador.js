
class NocodbControllador {

    constructor(nombreTabla, token) {
        if(new.target === NocodbControllador){
            throw new Error("No se puede instanciar una clase abstracta");  
        }

        this.apiURL = `https://app.nocodb.com/api/v2/tables/${nombreTabla}/records`
        this.token = token
    }

    getAllItems() {
        throw new Error("El metido getAllItems tiene que instanciarse en una subclase");
    }

    createItem(item) {

        throw new Error("El metodo createItem se tiene que implementar en una subclase");
        
        fetch(this.apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify(item)
        }).then(resp => resp.json())
            .then(datos => { console.log(datos) })
            .catch(error => console.log(error))
    }

    editItem(item){
        throw new Error("El metodo editItrm se tiene que implementar en una subclase");
        
    }

    deleteItem(idItem){
        throw new Error("El metodo delete Item se tiene que implementar en una subclase"); 
    }
}

export default NocodbControllador