setInterval( () => {
dt = new Date();
hr = dt.getHours();
min = dt.getMinutes();
sec = dt.getSeconds();
document.getElementById("hour").innerHTML = hr;
document.getElementById("min").innerHTML = min;
document.getElementById("sec").innerHTML = sec;

},1000);

