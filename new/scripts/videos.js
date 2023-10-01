const video =document.querySelector('video')
const bar= document.querySelector('.tumb')
const play= document.querySelector('#play')
play.addEventListener('click',()=>{
  video.play();
})
function looper(){
  setInterval(()=>{
    bar.style.width=`${Math.round((video.currentTime/video.duration)*100)}%`;
  })
}
looper();
