function Update {
var now = new Date();
var myDate = String(now.getMonth() + 1).padStart(2, '0') + '/' + now.getDate() + '/' + now.getFullYear();

document.getElementById('dateModified').innerHTML = myDate;
} 