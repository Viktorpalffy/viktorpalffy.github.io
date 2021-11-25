function doRoll(kez1) {
    const er = document.querySelector('.eredmeny')
    const ellenfelkep = document.querySelector('.ellenfel_kep');
    var kez2 = Math.floor(Math.random() * 3) + 1;
    
    ellenfelkep.src = kez2 + ".png";

    if (kez1 == kez2) {
        er.textContent = "Döntetlen!";
    } else if ((kez1 + 1) == kez2 || kez1 - 2 == kez2) {
        er.textContent = "Vesztettél!";
    } else {
        er.textContent = "Nyertél!";
    }
}