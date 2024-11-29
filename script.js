function verificarSenha() {
    var senha = document.getElementById('senha').value;
    var forcaSenha = document.getElementById('forcaSenha');
    var dicas = document.getElementById('dicas');

    var pontos = 0;
    
    // Regras para avaliar a força da senha
    if (senha.length >= 8) pontos += 1; // Senha com 8 ou mais caracteres
    if (/[A-Z]/.test(senha)) pontos += 1; // Senha com letras maiúsculas
    if (/[a-z]/.test(senha)) pontos += 1; // Senha com letras minúsculas
    if (/\d/.test(senha)) pontos += 1; // Senha com números
    if (/[!@#$%^&*(),.?":{}|<>]/.test(senha)) pontos += 1; // Senha com caracteres especiais
    
    // Avaliação da força da senha
    if (pontos < 2) {
        forcaSenha.textContent = "Senha Fraca!";
        forcaSenha.style.color = "red";
        dicas.textContent = "Dica: Use pelo menos 8 caracteres, uma mistura de maiúsculas, minúsculas, números e caracteres especiais.";
    } else if (pontos == 2 || pontos == 3) {
        forcaSenha.textContent = "Senha Moderada!";
        forcaSenha.style.color = "orange";
        dicas.textContent = "Dica: Torne sua senha mais forte adicionando mais variedade de caracteres.";
    } else {
        forcaSenha.textContent = "Senha Forte!";
        forcaSenha.style.color = "green";
        dicas.textContent = "Boa! Sua senha está bem protegida. Considere usar um gerenciador de senhas para mantê-la segura.";
    }
}
