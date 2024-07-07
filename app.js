function encrypt(text) {
    return text.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decrypt(text) {
    return text.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function displayEncryptedText(encryptedText) {
    const secondColumn = document.querySelector('.second-column');
    secondColumn.innerHTML = ''; // Limpia el contenido anterior

    // Crea y añade el contenedor para el texto encriptado
    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    const paragraph = document.createElement('p');
    paragraph.textContent = encryptedText;
    textContainer.appendChild(paragraph);

    secondColumn.appendChild(textContainer);

    // Crea y añade el botón de copiar
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';
    copyButton.classList.add('general-bottom', 'secondary-bottom');
    copyButton.onclick = function () {
        navigator.clipboard.writeText(encryptedText).then(() => {
            alert('Text copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };
    secondColumn.appendChild(copyButton); // Añade el botón al final de la sección
}

// Modificar el event listener del botón de encriptar para llamar a displayEncryptedText
document.getElementById("encryptButton").addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value;
    if (inputText.trim() === "") {
        alert("Please write something in the textarea.");
    } else {
        const encryptedText = encrypt(inputText);
        console.log(encryptedText);
        displayEncryptedText(encryptedText);
    }
});

document.getElementById("decryptButton").addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value;
    if (inputText.trim() === "") {
        alert("Please write something in the textarea.");
    } else {
        const decryptedText = decrypt(inputText);
        displayDecryptedText(decryptedText);
    }
});

function displayDecryptedText(decryptedText) {
    const secondColumn = document.querySelector('.second-column');
    secondColumn.innerHTML = ''; // Limpia el contenido anterior

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    const paragraph = document.createElement('p');
    paragraph.textContent = decryptedText;
    textContainer.appendChild(paragraph);

    secondColumn.appendChild(textContainer);

    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';
    copyButton.classList.add('general-bottom', 'secondary-bottom');
    copyButton.onclick = function () {
        navigator.clipboard.writeText(decryptedText).then(() => {
            alert('Text copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };
    secondColumn.appendChild(copyButton);
}