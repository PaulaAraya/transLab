// Crear Usuario
const createUser = function () {
	const email = document.getElementById('emailNewUser').value;
	const password = document.getElementById('passwordNewUser').value;

	firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(function (data) {
			console.log(data)
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
const sendEmail = function(){
	const user = firebase.auth().currentUser;
	user.sendEmailVerification()
	.then(function(){
		console.log('mail enviado');
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
			console.log(user);
			showHomePage();
			mailUser.innerHTML += ` <p>${user.email}</p>`;
		}else{
			showlogInPage();
		}
	})
};

getUser();

// Iniciar Sesión
const logIn = function () {
	const emailUser = document.getElementById('emailUser').value;
	const passwordUser = document.getElementById('passwordUser').value;
	firebase.auth().signInWithEmailAndPassword(emailUser, passwordUser)
		.then( function(){
		
		}).catch(function (error) {
			console.log(error)
		})
};


// Salir Sesión
const logOut = function () {
	firebase.auth().signOut().then(function() {
		console.log('sesión cerrada')
	}).catch(function(error) {
		console.log(error)
	});
}

/*
//Perfil de usuario
firebase.auth().currentUser;

//Actualizar perfil
firebase.auth().currentUser.updateProfile({
	displayName: ,
	photoURL: 
}).then(function () {
	// Ok.
}, function (error) {
	// Error.
}); */