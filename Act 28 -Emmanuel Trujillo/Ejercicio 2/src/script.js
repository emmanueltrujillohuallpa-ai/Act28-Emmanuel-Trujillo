function mostrarDatos() {

    let nombre = document.getElementById("nombre").value;
    let mail = document.getElementById("mail").value;
    let comentarios = document.getElementById("comentarios").value;

    alert(
        "Nombre: " + nombre +
        "\nMail: " + mail +
        "\nComentarios: " + comentarios
    );
}
