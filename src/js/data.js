const cardNumber = function () {
  const saldoInput = document.getElementById('saldoInput').value;
  const saldoSelect = document.getElementById('saldoSelect').value;
      fetch(`https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${saldoInput || saldoSelect}`)
    .then(response => response.json())
    .then(bipData => {
      dataBipCard = bipData;
      //Imprimir saldo 
      PrintSaldo(dataBipCard.saldoTarjeta);
    })
    .catch(error => {
      console.error('error procesando tu información');
      console.error('ERROR' + error.stack);
    });
}

const cardFare = function () {
  const calculatorInput = document.getElementById('calculatorInput').value;
  const calculatorSelect = document.getElementById('calculatorSelect').value;
  const fare = document.getElementById('tarifa').value;
      fetch(`https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${calculatorInput || calculatorSelect}`)
    .then(response => response.json())
    .then(bipData => {
      let dataBipCard = bipData;
      let balance = dataBipCard.saldoTarjeta;
      balance = balance.replace('$','')
      balanceCard = parseInt(balance);
      fareService = parseInt(fare);
      //Calcular saldo 
      calculateCard(balanceCard, fareService);
      PrintTarifa(fare);
    })
    .catch(error => {
      console.error('error procesando tu información');
      console.error('ERROR' + error.stack);
    });
}
/*
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

const PrintNumberCard1 = (event) => {
  event.preventDefault();
  const cardNumberInput = document.getElementById('cardNumberInput').value;
  cardPorfileSave.innerHTML = '';
  
  
};

*/