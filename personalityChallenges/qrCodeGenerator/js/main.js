const  generateQR = () => {
    const url = document.getElementById('url').value;
    if(!url) {
        alert('Por favor, ingresa una url.');
        return;
    }
    const qrDataURL = generateQRDataURL(url);
    const qrImage = document.getElementById("qrcode");
    qrImage.innerHTML = `<img src="${qrDataURL}" alt="Código QR">`   
}

function generateQRDataURL(url) {
    const canvas = document.createElement('canvas');
    const qrSize = 256;
    canvas.width = canvas.height = qrSize;

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, qrSize, qrSize);

    const qrData = generateQRData(url);

    const cellSize = qrSize / qrData.length;

      // Rellena las celdas activas del código QR
  ctx.fillStyle = '#000000'; // Color de las celdas activas (negro)
  for (let i = 0; i < qrData.length; i++) {
    for (let j = 0; j < qrData.length; j++) {
      if (qrData[i][j]) {
        ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
      }
    }
  }

  // Convierte el contenido del canvas a una URL de imagen
  return canvas.toDataURL();
}

function generateQRData(url) {
  // Puedes implementar la lógica para llenar qrData basado en la URL
  // dependiendo de la especificación del código QR (ECC, versión, etc.).
  // Aquí se usa un ejemplo simple.

  const textToEncode = encodeURIComponent(url);
  const qrData = [];

  // Llena qrData con true en las posiciones según el texto a codificar
  for (let i = 0; i < textToEncode.length; i++) {
    const binaryValue = textToBinary(textToEncode[i]);

    for (let j = 0; j < 8; j++) {
      if (binaryValue.charAt(j) === '1') {
        qrData.push(true);
      } else {
        qrData.push(false);
      }
    }
  }

  return qrData;
}

function textToBinary(text) {
  const bin = [];
  for (let i = 0; i < text.length; i++) {
    const binValue = text[i].charCodeAt(0).toString(2);
    bin.push('00000000'.substr(binValue.length) + binValue);
  }
  return bin.join('');
}

