

const lastModified = new Date(document.lastModified);
const dateMod = document.getElementById("dateMod");
dateMod.innerHTML = lastModified.toDateString();
