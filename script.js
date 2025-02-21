// Função para criptografar o texto
function encrypt(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

// Função para descriptografar o texto
function decrypt(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}


function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Texto copiado para a área de transferência!");
    }).catch(err => {
        alert("Erro ao copiar o texto: " + err);
    });
}

// Eventos dos botões
document.getElementById('botao_encriptar').addEventListener('click', () => {
    const text = document.getElementById('text-input').value;
    const encryptedText = encrypt(text);
    document.getElementById('output-text').value = encryptedText;
});

document.getElementById('botao_decriptar').addEventListener('click', () => {
    const text = document.getElementById('text-input').value;
    const decryptedText = decrypt(text);
    document.getElementById('output-text').value = decryptedText;
});

document.getElementById('botao_copiar').addEventListener('click', () => {
    const text = document.getElementById('output-text').value;
    copyToClipboard(text);
});
