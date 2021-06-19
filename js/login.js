function logar() {
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");


    if (email.value == "admin@admin.com" && senha.value == "1234") {
        localStorage.setItem("acesso", true);
        window.location.href = "index.html";
    } else {
        alert("Usuário ou senha inválidos!");
    }

    if (email.value == "carlosramalho04@hotmail.com" && senha.value == "1003702") {
        localStorage.setItem("acesso", true);
        alert("Usuário Autenticado!");
        window.location.href = "index.html";
    } else {
        alert("Usuário ou senha inválidos!");
    }

}