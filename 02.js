//2. felada: Írj egy aszinkron függvényt, ami egy véletlenszerű idő után (1-5 másodperc) generál egy véletlen számot (1-100) és jelenítse meg.

function randomIdo(min, max) {
    return new Promise((resolve) => {
        const ido = Math.floor(Math.random() * (max - min + 1)) + min;

        setTimeout(() => {
            console.log("Eltelt idő: " + ido / 1000 + " mp");
            resolve(randomSzam());
        }, ido);
    });
}

function randomSzam() {
    const szam = Math.floor(Math.random() * 100) + 1;
    return szam;
}

console.log("Az időzítés elindítva...");

async function generator() {
    const randomIdo_szam = await randomIdo(1000, 5000);
    
    console.log(`Az időzített szám: ${randomIdo_szam}`);
    console.log(randomSzam());
}

generator();