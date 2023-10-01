let data=require('./subjects')
let popup=document.querySelector('.pophold')
let pop=document.querySelector('.pop')
const close=()=>{
    popup.style.display="none"
}
function year(dets){
    popup.style.display="flex"
}
pop.addEventListener('click',close())

