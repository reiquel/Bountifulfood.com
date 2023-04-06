

let currentDate = document.lastModified;
document.querySelector('#dateMod').textContent = currentDate;

const opciones2 = 
{ weekday: 'long', 
year: 'numeric', 
month: 'long', 
day: 'numeric' };


document.querySelector('#datetime').textContent = new Date(Date.now()).toLocaleString('en-UK',opciones2);
