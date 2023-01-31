//LINKS FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyD-GxWJxYciaM8XdrEgSubEaK_qNe8Z2bk",
    authDomain: "banco-de-dados-database.firebaseapp.com",
    databaseURL: "https://banco-de-dados-database-default-rtdb.firebaseio.com",
    projectId: "banco-de-dados-database",
    storageBucket: "banco-de-dados-database.appspot.com",
    messagingSenderId: "97828710716",
    appId: "1:97828710716:web:1604dcd1c7a51046d45639",
    measurementId: "G-FDGY8V42QV"
  };   
  
// inicia o firebase
firebase.initializeApp(firebaseConfig);
// guarda na variável uma referência a função
var database  = firebase.database();

nomeSala = localStorage.getItem("roomName");
nomeUsuario = localStorage.getItem("userName");


