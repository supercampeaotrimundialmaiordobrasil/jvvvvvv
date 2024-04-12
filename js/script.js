function logar(){
    var usuario = document.getElementById("user").value;
    var senha = document.getElementById("password").value;


 if (usuario == 'carol' && senha == 123){
     alert("seja bem vindo " + 'carol')
    
 }
 else{
     alert("usuário ou senha incorretos")
 }
}