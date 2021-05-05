// window.addEventListener('DOMContentLoaded', () => {

//     setInterval(() => {
//     //   const moleHeads = document.querySelectorAll('.wgs__mole-head');
//     //   for (let moleHead of moleHeads) {
//     //     moleHead.classList.toggle('wgs__mole-head--hidden');
//     //   }
//     // }, 1000);

//   });



function popUpRandomMole() {
    let moleHeads = document.getElementsByClassName('wgs__mole-head');

    let randomNum = getRandomIntInclusive(0, 7);
    let currentMole = moleHeads[randomNum]
    currentMole.classList.remove('wgs__mole-head--hidden')

    setTimeout(() => {
        hideMole(currentMole);
    }, 3000);
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}





function hideMole(mole) {
    mole.classList.add('wgs__mole-head--hidden')
    setTimeout(() => {
        popUpRandomMole();
    }, 3000)
}

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        popUpRandomMole();
    }, 0)

    let moleHeads = document.querySelectorAll('.wgs__mole-head');

    // iterate through moleheads
    // click event listener that calls moleheads when molehead clicked
    // add --hidden

    moleHeads.forEach(mole => {
        mole.addEventListener('click', event => {
            hideMole(mole);
        })

    })


})
