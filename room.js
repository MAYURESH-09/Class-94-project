
  var firebaseConfig = {
    apiKey: "AIzaSyC4oYqYoUelQ23J2A_sxGBStS3-_9lh0yA",
    authDomain: "let-s-chat-web-app-30779.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-30779-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-30779",
    storageBucket: "let-s-chat-web-app-30779.appspot.com",
    messagingSenderId: "587644321026",
    appId: "1:587644321026:web:641dfc998f3f75ba97961b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function Show()
{
      name_user = localStorage.getItem("User Name")
      name_of_user =  document.getElementById("User_name").innerHTML = "Welcome , " + name_user 
      console.log(name_of_user)
}

function Add_User()
  {
      name_user = document.getElementById("User_name").value ;

      firebase.database().ref("/").child(name_user).update({
          purpose: "adding user"
      });
  }