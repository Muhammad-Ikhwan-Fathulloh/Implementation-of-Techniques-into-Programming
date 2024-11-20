// Enkripsi Caesar Cipher
function caesarEncrypt(text, shift) {
    return text
        .split("")
        .map(char => String.fromCharCode(char.charCodeAt(0) + shift))
        .join("");
}

// Dekripsi Caesar Cipher
function caesarDecrypt(text, shift) {
    return text
        .split("")
        .map(char => String.fromCharCode(char.charCodeAt(0) - shift))
        .join("");
}

// Contoh Penggunaan
const encrypted = caesarEncrypt("Hello", 3); // Output: "Khoor"
const decrypted = caesarDecrypt(encrypted, 3); // Output: "Hello"
console.log(encrypted, decrypted);