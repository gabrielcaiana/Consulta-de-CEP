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
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
