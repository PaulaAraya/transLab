//Captura datos de API
let bipCards = null;
let id = 

fetch('http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip={id}')
.then(response => response.json())
.then(bipJSON => {
  bipCards = bipJSON
  console.log(bipCards);
})
.catch(error => {
  console.error("tarjeta no existe");
  console.error("ERROR > " + error.stack);
});