//Captura datos de API
let bipCards = null;

fetch("http://www.psep.cl/api/Bip.php?&numberBip=666")
.then(response => response.json())
.then(bipJSON => {
  bipCards = bipJSON
  console.log(bipCards);
  renderInfoBip(bipCards);
})
.catch(error => {
  console.error("tarjeta no existe");
  console.error("ERROR > " + error.stack);
});