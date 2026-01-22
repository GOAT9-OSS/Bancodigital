
function entrarPagina(){
 var nome_usuario, senha_usuario;

 nome_usuario = document.getElementById('inpUsuario').value;
 senha_usuario = document.getElementById('inpSenha').value;

 if (nome_usuario === "Carlos" && senha_usuario === "1234") {
    alert ("Acesso permitido. Bem-vindo, " + nome_usuario + "!");
    window.location.href = "contaBancaria.html";
 }
 else {
    alert("Acesso negado. Nome de usuário ou senha incorretos.");
 }

}