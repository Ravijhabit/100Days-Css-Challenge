const component=document.querySelector('.component');
const lOne=document.querySelectorAll('.line');
component.addEventListener('click',()=>{
        lOne[0].classList.add('one');
        lOne[1].classList.add('two');
        lOne[2].classList.add('three');
        component.classList.toggle('changed');
})
