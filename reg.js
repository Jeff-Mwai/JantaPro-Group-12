var modal = document.getElementById('myModal');
var close = document.getElementsByClassName('close')[0];
var cancel = document.getElementById('cancel');
var apply = document.getElementById('Register');

function pop() {
   modal.style.display = "block";
   
}
close.onclick= function() {
    modal.style.display = "none";
}

cancel.onclick= function() {
    modal.style.display = "none";
}

yes.onclick= function() {
alert("Your registration has been received!")
    modal.style.display = "none";
}

wind