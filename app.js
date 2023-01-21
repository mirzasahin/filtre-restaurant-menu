const titles = document.querySelectorAll('.titles');
const boxes = document.querySelectorAll('.box');

titles.forEach((el) => {    
    el.addEventListener('click', (e) => {
        titles.forEach((li) => {
            li.classList.remove('active');
        })
        e.target.classList.add('active');

        boxes.forEach ((el2) => {
            el2.style.display = 'none';
        })
        document.querySelectorAll(e.target.dataset.filter).forEach((li) => {
            li.style.display = 'block';
        })
    })
})