var randomNumber = Math.floor(Math.random() * 10000) + 1;
document.getElementById("randomNumber").textContent =  randomNumber;


var today = new Date();
var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
var formattedDate = today.toLocaleDateString(undefined, options);
document.getElementById("todayDate").textContent =   formattedDate;


function printPage() {
    window.print();
}

 
var inputElement = document.getElementById('totalVAlue');
var outputElement = document.getElementById('total');
var outputElement2 = document.getElementById('totalplus');
var outputElement3 = document.getElementById('totalplus2');

inputElement.addEventListener('input', function() {
    var value = inputElement.value;
    outputElement.textContent =   value;
});

inputElement.addEventListener('input', function() {
    var value = inputElement.value;
    outputElement2.textContent =  parseInt(value)+((15* parseInt(value))/100);
});

inputElement.addEventListener('input', function() {
    var value = inputElement.value;
    outputElement3.textContent =    parseInt(value)+((15* parseInt(value))/100);
});