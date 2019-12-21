
      // Get the modal
      var modal1 = document.getElementById("Modal1");
      var modal2 = document.getElementById("Modal2");
      var modal3 = document.getElementById("Modal3");
      // Get the button that opens the modal
      var btn = document.getElementById("quiz");
      var choice1 = document.getElementsByClassName("choice1");
      var choice2 = document.getElementsByClassName("choice2");
      var choice3 = document.getElementsByClassName("choice3");
      // Get the <span> element that closes the modal
      var span1 = document.getElementById("close1");
      var span2 = document.getElementById("close2");
      var span3 = document.getElementById("close3");
      var span4 = document.getElementById("close4");
      
      // When the user clicks the button, open the modal 
      btn.onclick = function() {
        modal1.style.display = "block";
      }
      for (let button of choice1) {
        button.onclick = function() {
          modal2.style.display = "block";
        }
      }

      for (let button of choice2) {
        button.onclick = function() {
          modal3.style.display = "block";
        }
      }
      // When the user clicks on <span> (x), close the modal
      span1.onclick = function() {
        modal1.style.display = "none";
      }
      span2.onclick = function() {
        modal1.style.display = "none";
        modal2.style.display = "none";
      }
      span3.onclick = function() {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
      }
      
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal1 || event.target == modal2 || event.target == modal3) {
          modal1.style.display = "none";
          modal2.style.display = "none";
          modal3.style.display = "none";
        }
      }
