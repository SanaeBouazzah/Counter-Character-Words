const wrapper = document.querySelector('.wrapper');
const btn = document.querySelector('button');
const show = document.querySelector('.show');
const area = document.querySelector('textarea');
const chara = document.querySelector(".chara");
const word = document.querySelector(".word");
btn.addEventListener('click', ()=>{
    show.style.display ='block';
    wrapper.style.justifyContent = "flex-start";
    btn.style.display = 'none';
});
area.addEventListener('input', ()=>{
    if(area.value.trim() === ''){
        chara.innerHTML = "none";
        word.innerHTML = "none";
    }else{
        chara.innerHTML = area.value.length;
        word.innerHTML = area.value.trim().split(" ").length;
    } 
});