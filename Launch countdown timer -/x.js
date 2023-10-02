// Hedef tarihi ayarlayın (YYYY, MM (0-11), DD, HH, MM, SS)
var hedefTarih = new Date(2023, 9, 20, 12, 0, 0); // Örnek: 30 Eylül 2023, 12:00:00

function geriSayim() {
    var simdikiZaman = new Date();
    var kalanSure = hedefTarih - simdikiZaman;

    var gunler = Math.floor(kalanSure / (1000 * 60 * 60 * 24));
    var saatler = Math.floor((kalanSure % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var dakikalar = Math.floor((kalanSure % (1000 * 60 * 60)) / (1000 * 60));
    var saniyeler = Math.floor((kalanSure % (1000 * 60)) / 1000);

    

 
 }

// Her saniyede bir geriSayim fonksiyonunu çağırın
//setInterval(geriSayim, 1000);

// Sayfa yüklendiğinde ilk geri sayımı yapın
//geriSayim();
