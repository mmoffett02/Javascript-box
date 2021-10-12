const element= document.getElementById("box"); 
$(document).on('click','#button1',function() {
    element.style.height= "300px";
});
$(document).on('click','#button2',function() {
    element.style.backgroundColor= "blue"; 
});
$(document).on('click','#button3',function() {
    element.style.opacity= "0.5"; 
});
$(document).on('click','#button4',function() {
    element.setAttribute("style", "height:150px; width:150px; background-color:orange; margin:25px")
});