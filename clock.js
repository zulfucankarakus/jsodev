let nameal = prompt("adınız ne?");
let yazdır = document.querySelector("#myName");
yazdır.innerHTML = `${nameal} `;
var dt = new Date();
var saatal = dt.getHours();
var dakika = dt.getMinutes();
var saniye = dt.getSeconds();
let saat = document.querySelector("#myClock");
saat.innerHTML = `${saatal}:${dakika}:${saniye}`;
