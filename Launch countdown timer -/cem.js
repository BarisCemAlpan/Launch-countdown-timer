var hedefTarih = new Date(2023, 9, 20, 12, 0, 0); // Örnek: 30 Eylül 2023, 12:00:00

function geriSayim() {
    var simdikiZaman = new Date();
    var kalanSure = hedefTarih - simdikiZaman;

    var gunler = Math.floor(kalanSure / (1000 * 60 * 60 * 24));
    var saatler = Math.floor((kalanSure % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var dakikalar = Math.floor((kalanSure % (1000 * 60 * 60)) / (1000 * 60));
    var saniyeler = Math.floor((kalanSure % (1000 * 60)) / 1000);

    
    var ayten = document.getElementById("gün")
    ayten.textContent= gunler ;

    var necla = document.getElementById("saat")
    necla.textContent=saatler;

    var akkiz = document.getElementById("dakika")
    akkiz.textContent=dakikalar;

    var kiymet = document.getElementById("saniye")
    kiymet.textContent = saniyeler;
 
 }


setInterval(geriSayim, 1000);

geriSayim();
