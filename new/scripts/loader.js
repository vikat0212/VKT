let plane=document.querySelector('#table')
let cursor=document.querySelector('#cursor')
plane.addEventListener('mousemove',(pos)=>{
    cursor.style.left=`${pos.x}px`;
    cursor.style.top=`${pos.y}px`;
    cursor.style.opacity=.6;
})
plane.addEventListener('moveenter',()=>{
    cursor.style.opacity=.7
})
plane.addEventListener('mouseleave',()=>{
    cursor.style.opacity=0
})
window.addEventListener('load',async  ()=>{
    let loading = this.document.querySelector('.loading');
    let loader = this.document.querySelector('.loader');
    loading.style.display = "none";
    loader.style.animation = "none";
})