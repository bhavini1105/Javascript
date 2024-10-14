let prev = document.getElementById('prev');
let next = document.getElementById('next');

next.addEventListener('click',function () {
    let item = document.querySelectorAll('.item');
    document.querySelector('.slider').appendChild(item[0]);
})

prev.addEventListener('click',function () {
    let item = document.querySelectorAll('.item');
    document.querySelector('.slider').prepend(item[item.length - 1]); 
}) 