const calendar=document.querySelector('#planner');
for(let i=0;i<100;i++){
    const a=document.createElement('a');
    const btn=document.createElement('div');
    btn.appendChild(a);
    a.innerText=i+1;
    a.href=`src/Day${i+1}`; 
    calendar.appendChild(btn);
}