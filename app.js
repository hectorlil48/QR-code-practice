let btn = document.querySelector('.btn');
let main = document.querySelector('.card');

btn.addEventListener('click', () => {
    if(main.style.display === 'none'){
        main.style.display = 'block';
    }else {
        main.style.display = 'none';
    }
})