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

















/* const title = document.querySelectorAll('.title');
const titleArray = Array.from(title);
titleArray.forEach(title => {
    title.addEventListener('click', function () {
        titleArray.forEach(title => {
            title.style.backgroundColor = 'red';
        });
    });
}); */                                                                


/* const breakfast = document.querySelector('#breakfast');          // Class -> (querySelector'da # ile tanımlanır.)
const lunch = document.querySelector('#lunch');                  // Id -> (querySelector'da . ile tanımlanır.)
const dinner = document.querySelector('#dinner'); */
                                                                // All -> (querySelector'da . ile tanımlanır.)
/* const title = document.querySelectorAll('.title');             

const titleArray = Array.from(title); // ARRAY YÖNTEMİ
titleArray.forEach(title => {
    title.addEventListener('click', function () {
        title.style.backgroundColor = 'red';
    });
}); */

// TIKLANILDIĞINDA ARKA PLAN RENGINI KIRMIZI YAPMA VE IKINCI TIKLAMADA SIFIRLAMA
/* const titles = document.querySelectorAll('.title');              // NORMAL YÖNTEM
titles.forEach(title => {
    title.addEventListener('click', function () {
        if (title.style.backgroundColor === "red") {
            title.style.backgroundColor = "";
          } else {
            title.style.backgroundColor = "red";
          }
    });
});
 */

