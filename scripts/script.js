function tabchanger(id) {
    var navcon,i;
    navcon = document.getElementsByClassName("navcontent");
    for (i = 0; i < navcon.length; i++) {
      navcon[i].style.display = "none";}
  
      document.getElementById(id).style.display = "block";
    }


function formsub(){
      
      alert('Will Contact You Soon!'); 
      
        return false;
      }
      
      function adjust_textarea(h) {
        h.style.height = "20px";
        h.style.height = (h.scrollHeight) + "px";
      }