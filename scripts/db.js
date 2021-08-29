const API_URL = 'db.json';
const xhr = new XMLHttpRequest();

function OnRequest(){
    //Abre la conexion con la API de prueba que suplanta la db
    xhr.open('POST',`${API_URL}`);
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const data = JSON.parse(this.response);
            //validar que el campo no esten vacios
            if(user.length ==0 || password.length ==0){
                const HTMLResponse = document.querySelector('#alertContainer');
                const htp = `<p class="searchError">Todos los campos son obligatorios</p>`;
                HTMLResponse.innerHTML = `${htp}`;
            }
            else if(user == data.User && password== data.Password){
                // Suplanta un header("Location : data.html");
                window.location.href = 'data.html';
            }
            else if(user!= data.User || password!= data.Password){
                // alert("Usuario y/o contraseña incorrectos");
                const HTMLResponse = document.querySelector('#alertContainer');
                const htp = `<p class="searchError">Usuario y/o contraseña incorrectos</p>`;
                HTMLResponse.innerHTML = `${htp}`;
            }
        }
    }
    xhr.send();
}

   
document.getElementById("login").onclick = function(){
    OnRequest();
};