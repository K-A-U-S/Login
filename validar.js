function validarCampos()
{
    // Obtenha os valores inseridos pelo usuário
    var emailUsuario = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;


    // Verifique se os valores inseridos correspondem aos valores esperados
    if (emailUsuario == "") {
        alert("email não informado");
        
     }else(senha == "")
        alert("senha não informada");
}