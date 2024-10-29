document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("feedback");

    // Validação do formulário
    if (!validateForm(name, email, message)) {
        return; // Se a validação falhar, não envia o formulário
    }

    // Exibir uma mensagem de sucesso
    displayMessage(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso!`, "success");

    this.reset(); // Limpa o formulário
});

// Função para validar o formulário
function validateForm(name, email, message) {
    let isValid = true;

    if (name === "") {
        displayMessage("Por favor, insira seu nome.", "error");
        isValid = false;
    }

    if (email === "" || !validateEmail(email)) {
        displayMessage("Por favor, insira um email válido.", "error");
        isValid = false;
    }

    if (message === "") {
        displayMessage("Por favor, insira sua mensagem.", "error");
        isValid = false;
    }

    return isValid; // Retorna true se o formulário for válido
}

// Função para validar o formato do email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Função para exibir mensagens de feedback
function displayMessage(message, type) {
    const feedback = document.getElementById("feedback");
    feedback.textContent = message;
    feedback.className = type === "success" ? "feedback success" : "feedback error"; // Classe para estilos diferentes
}
