/*const idtarjeta = function () {
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

const PrintNumberCard1 = (event) => {
  event.preventDefault();
  const cardNumberInput = document.getElementById('cardNumberInput').value;
  cardPorfileSave.innerHTML = '';
  cardPorfileSave.innerHTML += `
  <ul class="list-group list-group-flush" style="width: 100%;">
             <li class="list-group-item">
             <p class="card-text text-justify">${cardNumberInput}</p>
             </li>
           </ul>
      <ul class="list-group list-group-flush" style="width: 100%;">
  ` ;
};

*/