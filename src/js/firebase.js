


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC1qq4sLXverzmLTt6VQ_IOGq1rjewaLpM",
    authDomain: "translab-paw.firebaseapp.com",
    databaseURL: "https://translab-paw.firebaseio.com",
    projectId: "translab-paw",
    storageBucket: "translab-paw.appspot.com",
    messagingSenderId: "394164749681"
  };
  firebase.initializeApp(config);

/*
document.addEventListener('DOMContentLoaded', function() {
  try {
    let app = firebase.app();
    let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
    document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
  } catch (e) {
    console.error(e);
    document.getElementById('load').innerHTML = '';
  }
});*/