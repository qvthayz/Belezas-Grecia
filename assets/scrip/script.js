document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', function(event) {
        event.preventDefault();
        alert("Grécia Antiga foi uma civilização pertencente a um período da história grega que abrange desde o Período Homérico dos séculos XIV a IX a.C. até o fim da antiguidade (c.476 d.C.). Imediatamente após este período foi o início da Idade Média e da era bizantina");
    });
});

document.addEventListener("DOMContentLoaded", function() {

    const enviarDadosBtn = document.getElementById("enviar-dados");

    enviarDadosBtn.addEventListener("click", function() {
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        if (nome && email) {
            alert(`Notificação: Dados enviados com sucesso!\nNome: ${nome}\nEmail: ${email}`);
        } else {
            alert("Por favor, preencha todos os campos antes de enviar!");
        }
    });


    const enviarComentarioBtn = document.getElementById("enviar-comentario");

    enviarComentarioBtn.addEventListener("click", function() {
        const comentario = document.getElementById("comentario").value;

        if (comentario.trim()) {
            alert("Notificação: Comentário enviado com sucesso!");
            document.getElementById("comentario").value = "";
        } else {
            alert("Escreva um comentário antes de enviar!");
        }
    });
});