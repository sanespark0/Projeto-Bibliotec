document.addEventListener("DOMContentLoaded", () => {
    const campoSenha = document.getElementById("senha");
    const btnSenha = document.getElementById("mostrar-senha");

    if (campoSenha && btnSenha) {
        btnSenha.addEventListener("click", () => {
            campoSenha.type = campoSenha.type === "password" ? "text" : "password";
        });
    }
});