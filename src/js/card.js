const cardNumberInput = document.getElementById('cardNumberInput');
//const cardSave = document.getElementById('cardSave');
//let arrayCard = [];

const addCard = () => {
  let cardNumber = cardNumberInput.value;
  console.log(cardNumber);
  let saveCard = {
    number: cardNumber
  }
  cardRef.push().set(saveCard)
}




/*
const idtarjeta = function () {
  if (cardNumberSelect1 || cardNumberSelect2) {
    fetch('http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip={idtarjeta}')
      .then(data => data.json())
      .then(data => {
        console.log(data)
        renderInfoCard(data);
      }).catch(error => {
        console.error("tarjeta no existe");
        console.error("ERROR > " + error.stack);
      });
  }
}

const renderInfoCard = function (data) {
  data.preventDefault();
  cardPorfileSave.innerHTML = '';
  cardPorfileSave.innerHTML = + `
        <div class="card-header text-center">SALDO</div>
          <div class="card-body cardText text-center">
            <h1 class="card-text"> $ ${data.saldoTarjeta}</h1>
            </div>
          </div>
  `
}


*/

/*
//Se crea referencia
const cardRef = firebase.database().ref('card/');

//Agregar tarjetas
const addCard = function () {
  const cardNumber = document.getElementById('cardNumberInput').value;
  let saveCard = {
    email: currentUser.email,
    number: cardNumber
  }
  cardRef.push().set(saveCard)
};
//Guardar Tarjetas en el select e input
const selectCard = ()=>{
  
};
*/