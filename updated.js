
const opciones2 = 
{ weekday: 'long', 
year: 'numeric', 
month: 'long', 
day: 'numeric' };


document.querySelector('#dateMod').textContent = 
new Date(Date.now()).toLocaleString('en-UK',opciones2);


