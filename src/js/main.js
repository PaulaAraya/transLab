const inputCard = document.getElementById('cardNumber');
const btnAddCard = document.getElementById('addCard');
const btnCalculate = document.getElementById('btnCalculate');
const btnRegister = document.getElementById('btnRegister')

//Registro de Usuario
btnRegister.addEventListener('click', createUser);



btnAddCard.addEventListener('click', addCardInput);
btnCalculate.addEventListener('click', selectCard);

