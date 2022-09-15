//RECETA PARA CONSUMIR APIS CON JS PURO

//1. Si quiero consumir un API debo saber para donde ir a qué servicio, es decir debo configurar la URI
const URI="https://api.spotify.com/v1/artists/3fMbdgg4jU18AjLCKBhRSm/top-tracks?market=US"

//2. Configuro datos especiales o de control en el servidor. El primer dato de control es el token
//Bearer es una llave
const TOKEN="Bearer BQAkontR_49V2YGf5dS6ktgMLzhtswfPbi1jpc2ikWSiACzDP92wV8dxNmOOPrIsgg7NFMzln9fRe0f_hasqgJl_WNF6ienvqjEzRHCep_-8AgVPJZcrgOdTYVBKmeedfJttV6x-qniteV7pN8Wx7N8Wiorao220bvqousovqvWrbMVIKFNAlGlLmWDIKf8"

//3. Configuro la petición
//NOTA: sólo POST y PUT configuran body, es decir lo que se va a montar desde el local al remoto, POST porque es lo que se va a publicar o guardar
//y PUT el nuevo dato que se va a colocar, ninguno de los 2 existen previamente en el remoto

//Para JS la petición es un objeto (lleva datos de diferentes tipos)
const PETICION={
    method:"GET",
    //se ponen llaves porque pueden ser varias cabeceras y objeto en vez de arreglos porque pueden ser de diferente tipo
    headers:{Authorization:TOKEN}
    //no se necesita body porque es un método GET, sólo voy a enviar datos cuando voy a publicar o actualizar
}

//4. Arranca con fetch
//consumir el API
//Va para la URI con la petición
fetch(URI,PETICION)
//then toca la puerta del API
//garantiza que esté en JSON
.then(function(respuesta){
    return respuesta.json()
})
//Hace lo que quiera con la respuesta
.then(function(respuesta) {
    console.log(respuesta)
    console.log(respuesta.tracks) //accedo a un atributo de la respuesta

    //recorrer un arreglo
    respuesta.tracks.forEach(function(cancion){
        console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)
        console.log(cancion.popularity)
        console.log(cancion.album.name)
        console.log(cancion.album.release_date)
    })
})
//si el servidor no contesta ejecuta el catch
.catch(function(respuestaError) {
    console.log(respuestaError)
})

