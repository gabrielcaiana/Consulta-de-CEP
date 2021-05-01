var submitButton = document.querySelector('#app button');
var zipCodeField = document.querySelector('#app form input');
var content = document.querySelector('#app main');

submitButton.addEventListener('click', execute);

function execute(event) {
  event.preventDefault();

  var zipCode = zipCodeField.value;

  zipCode = zipCode.replace(' ', '');
  zipCode = zipCode.replace('.', '');
  zipCode = zipCode.trim();

  axios
    .get(`https://viacep.com.br/ws/${zipCode}/json/`)
    .then((response) => {
      content.innerHTML = ''

      var { data } = response

      if (data.erro ) throw new Error(`CEP Inválido`)

      createLine(`${data.logradouro}`)
      createLine(`Bairro: ${data.bairro}`)
      createLine(`Cidade: ${data.localidade}-${data.uf}`)
    })
    .catch((error) => {
      content.innerHTML = ''
      createLine(`Oooops! Algo deu errado!`)
    });
}

function createLine(text) {
    var line = document.createElement('p')
    var text = document.createTextNode(text)

    line.appendChild(text)
    content.appendChild(line)
}
