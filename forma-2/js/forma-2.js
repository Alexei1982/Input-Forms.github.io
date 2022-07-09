
/*let foma2Animi = document.querySelector('.forma-2_forgot');
let forma2 = document.querySelector('.forma-2');
let forma2a = document.querySelector('.forma-2a');
foma2Animi.addEventListener('click', () => {
    forma2.classList.toggle('.forma-2_animi');
    forma2a.classList.toggle('.forma-2a_animi');
})

let foma2aAnimi = document.querySelector('.forma-2a_forgot');
foma2aAnimi.addEventListener('click', () => {
    forma2.classList.toggle('.forma-2_animi');
    forma2a.classList.toggle('.forma-2a_animi');
})*/

let forma2Animi = document.querySelector('.forma-2');
let forma2aAnimi = document.querySelector('.forma-2a');
let forma2Forgot = document.querySelector('.forma-2_forgot');
let forma2aForgot = document.querySelector('.forma-2a_forgot');

forma2Forgot.addEventListener('click', () => {
    forma2Animi.style['animation-name'] = 'forma-2_animi';
    forma2Animi.style['animation-direction'] = 'normal';
    forma2aAnimi.style['animation-direction'] = 'normal';
    forma2Animi.style['animation-delay'] = '0s';
    forma2aAnimi.style['animation-delay'] = '0.6s';
    forma2aAnimi.style['animation-name'] = 'forma-2a_animi';
})

forma2aForgot.addEventListener('click', () => {
    forma2Animi.style['animation-name'] = 'forma-2a_animi';
    forma2aAnimi.style['animation-name'] = 'forma-2_animi';
    forma2Animi.style['animation-delay'] = '0.6s';
    forma2aAnimi.style['animation-delay'] = '0s';
})