

document.getElementById('musicSelector').style.display = "none";
document.getElementById('addField').style.display = "none";

//when a button in SELECTOR DIV is clicked show a child button and add a textArea below for the message input
document.getElementById('benvenuto-btn').addEventListener('click', e =>{
    document.getElementById("benvenuto-btn").classList.toggle('off');
    document.getElementById('form_benvenuto').style.display === "flex" ?  document.getElementById('form_benvenuto').style.display = "none" : document.getElementById('form_benvenuto').style.display = "flex";
    
}); 
document.getElementById('attesa-btn').addEventListener('click', e =>{
    document.getElementById("attesa-btn").classList.toggle('off');
    document.getElementById('form_attesa').style.display === "flex" ?  document.getElementById('form_attesa').style.display = "none" : document.getElementById('form_attesa').style.display = "flex";    
}); 
document.getElementById('notte-btn').addEventListener('click', e =>{
    document.getElementById("notte-btn").classList.toggle('off');
    document.getElementById('form_notte').style.display === "flex" ?  document.getElementById('form_notte').style.display = "none" : document.getElementById('form_notte').style.display = "flex";  
}); 
document.getElementById('occupato-btn').addEventListener('click', e =>{
    document.getElementById("occupato-btn").classList.toggle('off');
    document.getElementById('form_occupato').style.display === "flex" ?  document.getElementById('form_occupato').style.display = "none" : document.getElementById('form_occupato').style.display = "flex";
}); 

function blurPage(){
    document.getElementById('container-fluid').style.filter = "blur(3px)";
    document.getElementById('btn-left').style.filter = "blur(3px)";
    document.getElementById('btn-right').style.filter = "blur(3px)";
}
function unblurPage(){
    document.getElementById('container-fluid').style.filter = "blur(0px)";
    document.getElementById('btn-left').style.filter = "blur(0px)";
    document.getElementById('btn-right').style.filter = "blur(0px)";
}

document.getElementById('music').addEventListener('click', e =>{
    document.getElementById('musicSelector').style.display = "block";
    blurPage();
        
}); 

//HIDE MUSIC SELECTOR WHEN CLICKED OUTSIDE
window.addEventListener('click', function(e){   
    if (document.getElementById('musicSelector').contains(e.target) || document.getElementById('music').contains(e.target)){
      // Clicked in box
    } else{
      // Clicked outside the box
      document.getElementById('musicSelector').style.display = "none";
      unblurPage();
    }
  });

/*
document.getElementById("addMsg").addEventListener('click', e => {
    document.getElementById("addField").style.display = "block";
    blurPage();

});*/

window.addEventListener('click', function(e){   
    if (document.getElementById('addField').contains(e.target) || document.getElementById('addMsg').contains(e.target)){
      // Clicked in box
      document.getElementById("addField").style.display = "block";
      document.getElementById('btn-left').style.filter = "blur(3px)";
      document.getElementById('btn-right').style.filter = "blur(3px)";
      document.getElementById('selector').style.filter = "blur(3px)";
      document.getElementById('title').style.filter = "blur(3px)";
      document.getElementById('divisor').style.filter = "blur(3px)";
      Array.from(document.getElementsByClassName("message")).every(e => e.style.filter = "blur(3px)");

    } else{
      // Clicked outside the box
      document.getElementById("addField").style.display = "none";
      document.getElementById('btn-left').style.filter = "blur(0)";
      document.getElementById('btn-right').style.filter = "blur(0)";
      document.getElementById('selector').style.filter = "blur(0)";
      document.getElementById('title').style.filter = "blur(0)";
      document.getElementById('divisor').style.filter = "blur(0)";
      Array.from(document.getElementsByClassName("message")).every(e => e.style.filter = "blur(0)");
    }
  });