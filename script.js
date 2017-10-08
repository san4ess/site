var btn = document.getElementById('btn');
btn.addEventListener('click', showMessage);

function showMessage() {
    alert('Hello from Sasha');
    var date = new Date();
    date.getDay();
    alert('Today is ' + date);
}
var btn1 = document.getElementById('btn1');
btn1.addEventListener('click', showMessage);

function showMessage() {
    alert('Windows Broken');
    var date = new Date();
    date.getFullYear();
    alert('Today is ' + date);
}
var btn2 = document.getElementById('btn2');
btn2.addEventListener('click', showMessage);

function showMessage() {
    alert('Click to download');
    var date = new Date();
    date.getFullYear();
    alert('Today is ' + date);
}