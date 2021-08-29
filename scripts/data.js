const API_URL = 'https://jsonplaceholder.typicode.com';
const xhr = new XMLHttpRequest();

function OnRequest(){
    var id = document.getElementById("id").value;
    // Validacion dato si esta vacio, si es cero, si es una letra, mayor a 100, no es entero 
    if(id.length <= 0 || id==0 || isNaN(id)==true || id > 100 || validarEntero(id)==false){
        const HTMLResponse = document.querySelector('#data');
        const htp = `<p class="searchError">Busqueda inválida</p>`;
        HTMLResponse.innerHTML = `${htp}`;
    }   
    if(id.length > 0 && id!=0 &&  isNaN(id)==false &&  id <= 100 && validarEntero(id)==true){
        //Abre la conexion con la API de prueba, seleccionando por id los datos
        xhr.open('GET',`${API_URL}/posts/${id}`);
        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const data = JSON.parse(this.response);
                const HTMLResponse = document.querySelector('#data');
                const htp = `<p class="userid">UserId : ${data.userId}</p>
                <p class="id">ID : ${data.id}</p>
                <p class="title">Title: ${data.title}</p>
                <p class="body">Body: ${data.body}</p>`;
                HTMLResponse.innerHTML = `${htp}`;
            }
        }
    
    xhr.send();
    }
    
}

function validarEntero(valor){
    if (valor % 1 == 0) {
        return true
    }
    else {
        return false
    }
}

document.getElementById("buscar").onclick = function(){
    OnRequest();
}
