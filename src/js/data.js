const cardNumber = function () {
  const saldoInput = document.getElementById('saldoInput').value;
  const saldoSelect = document.getElementById('saldoSelect').value;
      fetch(`https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${saldoInput || saldoSelect}`)
    .then(response => response.json())
    .then(bipData => {
      dataBipCard = bipData;
      //Imprimir saldo 
      PrintSaldo(dataBipCard.saldoTarjeta);
      clearInput();
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
      clearInput();
    })
    .catch(error => {
      console.error('error procesando tu información');
      console.error('ERROR' + error.stack);
    });
}
