async function submit(){
let sub = document.querySelector('#sub').value
let lang = document.querySelector('#lang').value
let time = document.querySelector('#time').value
let src = document.querySelector('#src').value
await window.alert(sub,lang,time,src)
let form =document.querySelector('form').innerHTML=`${sub,lang,time,src}`
}