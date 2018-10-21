// Crear Usuario
const createUser = function() {
	const email = document.getElementById('emailNewUser').value;
	const password = document.getElementById('passwordNewUser').value;

	firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(function (data) {
			sendEmail();
			getUser();
			alert('recibiras un correo electrónico de verificación de cuenta ')
		}).catch(function (error) {
			console.log(error)// cada vez que exista un error 
		});
		getUser();
	return false; // false para que la pagina no se vuelva a recargar
};

// Enviar Mail Verficación
const sendEmail = function() {
	const user = firebase.auth().currentUser;
	user.sendEmailVerification()
	.then(function(){
		alert('Email de verificación enviado. Por favor verifique su cuenta');
	}, function(error) {
		console.log('error');
	})
}

// Get User
const mailUser = document.getElementById('mailUser');
let user = firebase.auth().currentUser;

const getUser = function() {
	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			showHomePage();
			mailUser.innerHTML = `<p class="text-center">${user.email}</p>`;
		}else{
			showlogInPage();
		}
	})
};

getUser();

// Iniciar Sesión
const logIn = function() {
	const emailUser = document.getElementById('emailUser').value;
	const passwordUser = document.getElementById('passwordUser').value;
	firebase.auth().signInWithEmailAndPassword(emailUser, passwordUser)
		.then( function(){
		
		}).catch(function (error) {
			console.log(error)
		})
};


// Salir Sesión
const logOut = function() {
	firebase.auth().signOut().then(function() {
	}).catch(function(error) {
		console.log(error)
	});
}
