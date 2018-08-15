// Crear Usuario
const createUser = function (event) {
	event.preventDefault();
	const email = document.getElementById('emailNewUser').value;
	const password = document.getElementById('passwordNewUser').value;

	firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(function (data) {
			console.log(data)
			viewHome(); //Iniciada la sesión cambia a la pagina principal 
		}).catch(function (error) {
			console.log(error)// cada vez que exista un error 
		});
	return false; // false para que la pagina no se vuelva a recargar
};

// Iniciar Sesión
const logIn = function (event) {
	event.preventDefault();
	const emailUser = document.getElementById('emailUser').value;
	const passwordUser = document.getElementById('passwordUser').value;

	firebase.auth().signInWithEmailAndPassword(emailUser, passwordUser)
		.catch(function (error) {
			console.log(error)
		})
};

// Salir Sesión
const logOut = function () {
	firebase.auth().signOut()
	.then(function() {
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