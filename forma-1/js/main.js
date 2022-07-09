let formaTitle = document.querySelector('.forma-title');
let formaConteiner = document.querySelector('.forma-conteiner');
let formaConteinerExit = document.querySelector('.forma-conteiner_exit');

formaTitle.addEventListener('click', () => {
    formaConteiner.style.display = 'block';
})

formaConteinerExit.addEventListener('click', () => {
    formaConteiner.style.display = 'none';
})

let forma1Input1 = document.querySelector('.forma-1_passvord-input');
let forma1Input2 = document.querySelector('.forma-1_img');

forma1Input2.addEventListener('click', () => {
    forma1Input1.classList.toggle('.activ');
    forma1Input2.classList.toggle('.activ');
    let d = document.querySelector('.forma-1_passvord-input');
    let forma11 = d.classList.contains('.activ');
    if (forma11 === true) {
        forma1Input1.setAttribute('type', 'text');
    }
    else {
        forma1Input1.setAttribute('type', 'password');
    }
})

let forma1Text = document.querySelector('.forma-1_text');
let forma1 = document.querySelector('.forma-1')

forma1Text.addEventListener('click', () => {
    forma1.classList.toggle('.activ');
    let d = document.querySelector('.forma-1');
    let forma = d.classList.contains('.activ');
    if (forma === false) {
        forma1.setAttribute('display', 'none');
    }
    else {
        forma1.setAttribute('display', 'block');
    }
})