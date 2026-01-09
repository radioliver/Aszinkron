//Írj egy aszinkron függvényt, ami három különböző időzítéssel (1, 2, és 3 másodperc) ír ki egy-egy üzenetet a konzolra.

async function idozitettFuggvenyek() {
    setTimeout(() => {
        console.log('1 masodperc');
    }, 1000);
    
    setTimeout(() => {
        console.log('A masodik idozitett fuggveny');
  }, 2000);
  
  setTimeout(() => {
      console.log('Az harmadik idozitett fuggveny');
    }, 3000);
}


function idozitettPromise(idő) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Eltelt idő: ${idő/1000} mp`);
        },idő );
    });
}

async function idozitettUzenetek() {
    await idozitettPromise(1000);
    await idozitettPromise(2000);
    await idozitettPromise(3000);
    await idozitettPromise(4000);
    await idozitettPromise(5000);
};

console.log("Az időzítés befejeződött.")




