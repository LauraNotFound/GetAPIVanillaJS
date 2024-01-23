// alert("Bienvenido al mundo Marvel")
const marvel = { //Se define un objeto llamado marvel
    render: () => { //Define un método (función de flecha) llamado render dentro del objeto marvel. 
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=1f29df3fccf67aedb150bd3238d2ff8a&hash=886f28fd6cdb165c965c718e0933f574'; //Declara una constante llamada urlAPI que contiene la URL de la api de Marvel con parámetros como el tipo ts (timestamp), la clave de API (apikey) y el hash
        const container = document.querySelector('#marvel-row'); //Busca en el documento un elemento HTML con el ID "marvel-row" y almacena la referencia a ese elemento en la constante 'container'
        let contentHTML = ''; //Declara una variable llamada 'contentHTML' y la inicializa con una cadena vacía. Esta variable se utilizará para almacenar el contenido HTML que se genera dinámicamente (o sea que varía).
        fetch(urlAPI) //Inicia una solicitud HTTP para obtener los datos de la URL especificada en urlAPI. La función fetch devuelve una promesa que se cumple con la respuesta a la solicitud
        .then(res => res.json()) //Encadena un método '.then' a la promesa devuelta por fetch. Este método convierte la respuesta de la solicitud a JSOn y devuelve otra promesa.
        .then((json)=>{
            for(const hero of json.data.results){ //Encadena otro método .then que toma el JSON obtenido e itera sobre los resultados de los héroes. Para cada héroe, se extraen datos como la URL y la información de la imagen para construir un fragmento de HTML
                let urlHero = hero.urls[0].url;
                contentHTML += `
                <div class="col-md-4">
                    <a href="${urlHero}" target="_blank">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                    </a>
                    <h3 class="title">${hero.name}</h3>
                </div>`
            }
            container.innerHTML = contentHTML; //Se establece el contenido del elemento HTMl referenciado por container con el contenido generado en el paso anterior.
        })
    }
};
marvel.render(); //Llama al método render del objeto marvel, así se activa todo el proceso de obtener datos de la API, construir contenido html y mostrarlo en la página

// 126e719a97a6c08ae5ef031319904209049ebc9ac1f29df3fccf67aedb150bd3238d2ff8a