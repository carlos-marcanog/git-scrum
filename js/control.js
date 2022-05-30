const user = document.getElementById("user");
const pass = document.getElementById("pass");
const form = document.getElementById("form");
const warn = document.getElementById("warnings");
const exitoso = document.getElementById("exitoso");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings ="";
    let ingresar = false;
    let expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    warn.innerHTML="";
    exitoso.innerHTML="";

    if(user.value == "" || pass.value ==""){
        warnings += "No puede haber campos vacios<br>";
        ingresar = true;
    }

    if(!expRegular.test(user.value)){
        warnings +="El Usurio no es Valido<br>";
        ingresar = true;
    }

    if(ingresar){
        warn.innerHTML = warnings;
    }
    else{
        exitoso.innerHTML = "Ingreso Exitoso"
    }

})