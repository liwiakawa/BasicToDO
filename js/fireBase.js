var app_firebase = {};
(function () {
  var config = {
    apiKey: "AIzaSyBks1skGNuHOuhQsf5e4dU2lkbo4MGX1Mg",
    authDomain: "to-do-6999.firebaseapp.com",
    databaseURL: "https://to-do-6999.firebaseio.com",
    projectId: "to-do-6999",
    storageBucket: "to-do-6999.appspot.com",
    messagingSenderId: "1032676433911"
  };
  firebase.initializeApp(config);
  var storage = firebase.storage();
  var database = firebase.database();
  app_firebase = firebase;

})()