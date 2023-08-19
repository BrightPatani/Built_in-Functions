
var Url = document.getElementById("Url");
    
    // Display the current URL
    Url.textContent = window.location.href;
    
    // Add click event listener to the "Change URL" button
    document.getElementById("Url").addEventListener("click", function() {
      var newUrl = "https://www.google.com";
      
      // Change the current URL to the new URL
      window.location.href = newUrl;
    });
    
    // Add click event listener to the "Go Back" button
    document.getElementById("goBack").addEventListener("click", function(){
      window.history.back();
    });