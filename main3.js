user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name")

// Your web app's Firebase configuration







 function back(){
  window.location = "kwitter_room.html";
 }

 function send(){

//take the value of the text input from html-- document.getElementById('msg').value
 msg = document.getElementById('msg').value;

      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
    }


    //Add the code for the logout button
    
    function logout(){

      //remove username from the local storage- removeItem("user_name")
      localStorage. removeItem("user_name");
      localStorage.removeItem("room_name");
    window.location = "index.html";
    }