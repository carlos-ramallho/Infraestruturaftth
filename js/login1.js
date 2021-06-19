var logado = false;
if (localStorage.getItem("acesso") == "true") {
    Logado == true;
}
if (logado != true) {
    alert("Você não está altenticado!");
    window.location.href = "login.html";
}