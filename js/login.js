function logar() {
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");


    if (email.value == "projetos@grupobrisanet.com.br" && senha.value == "%brisa321") {
        localStorage.setItem("acesso", true);
        alert("Usuário Autenticado!");
        window.location.href = "index.html";
    } else if (email.value == "carlosramalho04@hotmail.com" && senha.value == "1003702") {
        localStorage.setItem("acesso", true);
        alert("Usuário Autenticado!");
        window.location.href = "index.html";
    } else {
        localStorage.setItem("acesso", false);
        alert("Usuário ou senha inválidos!");
    }

}