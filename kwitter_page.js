//YOUR FIREBASE LINKS
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

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send()
    {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                likes:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
likes=message_data['like'];
name_width_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_width_tag="<h4 class='messsage_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+likes+"onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+likes+"</span></button><hr>";
row=name_width_tag+message_width_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function updateLike(message_id)
{
 console.log("clicked on like button - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
   updated_likes = Number(likes) + 1;
    console.log(updated_likes);
     firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
 }
  function logout() 
  {
       localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
   window.location.replace("kwitter.html"); }
