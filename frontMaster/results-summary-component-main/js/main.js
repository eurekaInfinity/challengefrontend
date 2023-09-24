const requestURL = 'frontMaster/results-summary-component-main/data.json'

fetch(requestURL)
  .then(response => response.json())
  .then(data => {
    const outputElement = document.getElementById('yourResult');
    outputElement.textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));

const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data)
      const outputElement = document.getElementById('yourResult');
      outputElement.textContent = JSON.stringify(data, null, 2);
    } else {
      console.error('Error al cargar el archivo JSON:', xhr.status);
    }
  }
};
xhr.send();