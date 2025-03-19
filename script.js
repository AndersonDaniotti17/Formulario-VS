document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário, apenas para efeito de demonstração

    // Exibe a mensagem de sucesso
    var mensagem = document.getElementById('mensagem-enviado');
    mensagem.style.display = 'block';

    // Opcional: Limpa os campos do formulário após o envio
    document.getElementById('formulario').reset();

    // Se você quiser enviar os dados, pode adicionar uma chamada AJAX aqui ou enviar para o servidor
});
