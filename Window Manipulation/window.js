var Window;
document.getElementById("openButton").addEventListener("click", function() {
    var url = "https://www.fasticoretechnology.com";
    var Name = "fasticore";
    var Features = "width=600,height=400,resizable=yes";
    
    // Open a new window with the specified URL and options
    Window = window.open(url, Name, Features);
  });
  
  document.getElementById("closeButton").addEventListener("click", function() {
    if (Window) {
      // Close the new window if it's open
      Window.close();
    }
  });