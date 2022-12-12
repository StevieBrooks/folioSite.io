const redLight = document.querySelector('.red-light');
const orangeLight = document.querySelector('.orange-light');
const greenLight = document.querySelector('.green-light');

redLight.style.backgroundColor = 'black';
orangeLight.style.backgroundColor = 'black';
greenLight.style.backgroundColor = 'green';

let time = new Date();
let sec = time.getSeconds();
const defaultSystem = setInterval(dispSecs, 1000);
function dispSecs() {
    console.log(sec++);
    sec === 45 ? sec = 0 : sec;
    sec < 26 ? greenLight.style.backgroundColor = 'green' : 
            greenLight.style.backgroundColor = 'black';
    sec >= 26 && sec < 29 ? orangeLight.style.backgroundColor = 'orange' :
            orangeLight.style.backgroundColor = 'black';
    sec >= 29 && sec < 38 ? redLight.style.backgroundColor = 'red' :
            redLight.style.backgroundColor = 'black';
    sec >= 38 && sec % 2 === 0 ? orangeLight.style.backgroundColor = 'orange' :
            sec;
}

function start() {
        greenLight.style.backgroundColor === 'green' ? sec = 22 : setTimeout(greenOff, 20000);
};

function greenOff() {
        sec = 23;
}

setTimeout(welMess1, 3000);
setTimeout(welMess2, 6000);
setTimeout(welMess3, 9000);

const daftMessage = document.getElementById('daftMessage');
function welMess1() {
        daftMessage.innerHTML = 'Hello, I am a traffic light.';
        daftMessage.style.color = 'red';
        daftMessage.style.transition = 'ease-in .5s';
}

function welMess2() {
        daftMessage.innerHTML = `...and yes, I know I'm not to scale.`;
}

function welMess3() {
        daftMessage.innerHTML = 'Sue me!';
        daftMessage.style.fontSize = '2.5rem';
        setTimeout(endFunc, 3000);
}

const funBox = document.querySelector('.fun-box');
const message = document.querySelector('.message');

function endFunc() {
        funBox.style.height = '50px';
        funBox.style.width = '150px';
        funBox.style.paddingTop = '16px';
        message.style.display = 'none';
}
