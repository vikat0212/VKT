let mainBar=document.querySelectorAll('.main h1')
let moveBar=document.querySelector('#scroll')
let vic1 =document.querySelector('#scrl');
let rect=vic1.getBoundingClientRect();
 moveBar.style.left=`${rect.left}px`
 mainBar.forEach((elem)=>{
elem.addEventListener('mousemove',(dets)=>{
let vic=elem.getBoundingClientRect(); 
 moveBar.style.left=`${vic.left}px`
 let tempVar=vic.right-vic.left
 if(tempVar<0){
  tempVar=tempVar*-1;
 };
 moveBar.style.width=`${tempVar}px`
})
let pve=rect.right-rect.left;
if(pve<0){
 pve=(pve*-1)
}
const fncdef=()=>{
  moveBar.style.left=`${rect.left}px` 
  moveBar.style.width=`${pve}px`
}
window.addEventListener('load',fncdef)
elem.addEventListener('mouseleave',fncdef)
})