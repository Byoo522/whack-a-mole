// window.addEventListener('DOMContentLoaded', () => {

//     setInterval(() => {
//     //   const moleHeads = document.querySelectorAll('.wgs__mole-head');
//     //   for (let moleHead of moleHeads) {
//     //     moleHead.classList.toggle('wgs__mole-head--hidden');
//     //   }
//     // }, 1000);

//   });


window.addEventListener("DOMContentLoaded", () => {
    function popUpRandomMole() {

        let moleHeads = document.getElementsByClassName('wgs__mole-head');
        let randomNum = getRandomIntInclusive(0, 7);
        let currentMole = moleHeads[randomNum]
        currentMole.classList.remove('wgs__mole-head--hidden')

        setTimeout(() => {
            currentMole.classList.add('wgs__mole-head--hidden')
        }, 1000);
    }


    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    setInterval(() => {
        popUpRandomMole();
    },1000)

})
