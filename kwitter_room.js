  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyCakX_TGepvQ40aCblHabi-HXZnJn863Js",
      authDomain: "kwitter-953e0.firebaseapp.com",
      databaseURL: "https://kwitter-953e0-default-rtdb.firebaseio.com",
      projectId: "kwitter-953e0",
      storageBucket: "kwitter-953e0.appspot.com",
      messagingSenderId: "297083589434",
      appId: "1:297083589434:web:1b1dc95a12b54d6af17603"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE


user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
function addRoom()
{
  room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose:"adding roomname"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}