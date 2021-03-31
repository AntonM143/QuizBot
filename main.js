// ------------------------dölja spelregler----------------------          
function myFunction() {
    var rules = document.getElementById("rules");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("rulesBtn");
  
    if (rules.style.display === "none") 
    {
      rules.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } 
    else 
    {
      rules.style.display = "none";
      btnText.innerHTML = "Hide";
      moreText.style.display = "inline";
    }
  }


