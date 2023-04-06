const opciones2 = 
{weekday: 'long', 
year: 'numeric', 
month: 'long', 
day: 'numeric',
hour: '2-digit',
minute: '2-digit',
second: '2-digit' };



const fecha2 = new Date();
const fechaFormateada2 = fecha2.toLocaleString('en-UK', opciones2);

document.getElementById('dateMod').textContent = fechaFormateada2;