let bl=document.querySelector('.books-list')
bl.innerHTML=`<ul>
<li onClick=files("/pdf/fotron.pdf")>fotron</li>
<li onClick=files("/pdf/c.pdf")>c-lang</li>
<li onClick=files("/pdf/cpp.pdf")>c<sup>++</sup></li>
<li onClick=files("/pdf/cs.pdf")>c#</li>
<li onClick=files("/pdf/java.pdf")>java</li>
<li onClick=files("/pdf/javascript.pdf")>javascript</li>
<li onClick=files("/pdf/python.pdf")>python</li>
</ul>`
let bTech={
    elem1:"1<sup>st</sup> year",
    elem1src:'onClick=year("b-tech-1")',
    elem2:"2<sup>nd</sup> year",
    elem2src:'onClick=year("b-tech-2")',
    elem3:"3<sup>3d</sup> year",
    elem3src:'onClick=year("b-tech-3")',
    elem4:"4<sup>th</sup> year",
    elem4src:'onClick=year("b-tech-4")',
    elem5:"c-lang",
    elem5src:'onClick=files("/pdf/file.pdf")',
    elem6src:'onClick=files("/pdf/file.pdf")',
    elem6:"python",
    elem7src:'onClick=files("/pdf/file.pdf")',
    elem7:"c<sup>++</sup>"
}
let mTech={
    elem1:"1<sup>st</sup> year",
    elem1src:'onClick=year("m-tech-1")',
    elem2:"2<sup>nd</sup> year",
    elem2src:'onClick=year("m-tech-2")',
    elem3:"3<sup>3d</sup> year",
    elem3src:'onClick=year("m-tech-3")',
    elem4:"4<sup>th</sup> year",
    elem4src:'onClick=files("/pdf/file.pdf")',
    elem5:"c-lang",
    elem5src:'onClick=files("/pdf/file.pdf")',
    elem6src:'onClick=files("/pdf/file.pdf")',
    elem6:"python",
    elem7src:'onClick=files("/pdf/file.pdf")',
    elem7:"c<sup>++</sup>"
}
let mba={
    elem1:"1<sup>st</sup> year",
    elem1src:'onClick=year("mba-1")',
    elem2:"2<sup>nd</sup> year",
    elem2src:'onClick=year("mba-2")',
    elem3:"3<sup>3d</sup> year",
    elem3src:'onClick=files("/pdf/file.pdf")',
    elem4:"4<sup>th</sup> year",
    elem4src:'onClick=files("/pdf/file.pdf")',
    elem5:"c-lang",
    elem5src:'onClick=files("/pdf/file.pdf")',
    elem6src:'onClick=files("/pdf/file.pdf")',
    elem6:"python",
    elem7src:'onClick=files("/pdf/file.pdf")',
    elem7:"c<sup>++</sup>"
}
let mca={
    elem1:"1<sup>st</sup> year",
    elem1src:'onClick=year("mca-1")',
    elem2:"2<sup>nd</sup> year",
    elem2src:'onClick=year("mca-2")',
    elem3:"3<sup>3d</sup> year",
    elem3src:'onClick=year("mca-3")',
    elem4:"4<sup>th</sup> year",
    elem4src:'onClick=files("/pdf/file.pdf")',
    elem5:"c-lang",
    elem5src:'onClick=files("/pdf/file.pdf")',
    elem6src:'onClick=files("/pdf/file.pdf")',
    elem6:"python",
    elem7src:'onClick=files("/pdf/file.pdf")',
    elem7:"c<sup>++</sup>"
}
let diplamo={
    elem1:"1<sup>st</sup> year",
    elem1src:'onClick=year("dp-1")',
    elem2:"2<sup>nd</sup> year",
    elem2src:'onClick=year("dp-2")',
    elem3:"3<sup>3d</sup> year",
    elem3src:'onClick=year("dp-3")',
    elem4:"4<sup>th</sup> year",
    elem4src:'onClick=files("/pdf/file.pdf")',
    elem5:"c-lang",
    elem5src:'onClick=files("/pdf/file.pdf")',
    elem6src:'onClick=files("/pdf/file.pdf")',
    elem6:"python",
    elem7src:'onClick=files("/pdf/file.pdf")',
    elem7:"c<sup>++</sup>"
}
let ece={
    elem1:"1<sup>st</sup> year",
    elem1src:'onClick=year("ece-1)',
    elem2:"2<sup>nd</sup> year",
    elem2src:'onClick=year("ece-2)',
    elem3:"3<sup>3d</sup> year",
    elem3src:'onClick=year("ece-3)',
    elem4:"4<sup>th</sup> year",
    elem4src:'onClick=year("ece-4)',
    elem5:"c-lang",
    elem5src:'onClick=files("/pdf/file.pdf")',
    elem6src:'onClick=files("/pdf/file.pdf")',
    elem6:"python",
    elem7src:'onClick=files("/pdf/file.pdf")',
    elem7:"c<sup>++</sup>"
}
let civil={
    elem1:"1<sup>st</sup> year",
    elem1src:'onClick=year("civil-1")',
    elem2:"2<sup>nd</sup> year",
    elem2src:'onClick=year("civil-2")',
    elem3:"3<sup>3d</sup> year",
    elem3src:'onClick=year("civil-3")',
    elem4:"4<sup>th</sup> year",
    elem4src:'onClick=year("civil-4")',
    elem5:"c-lang",
    elem5src:'onClick=files("/pdf/file.pdf")',
    elem6src:'onClick=files("/pdf/file.pdf")',
    elem6:"python",
    elem7src:'onClick=files("/pdf/file.pdf")',
    elem7:"c<sup>++</sup>"
}
async function change(course){
    let bl=document.querySelector('.books-list')
    if(cousre="b-tech:"){
    bl.innerHTML=`<ul>
    <li ${bTech.elem1src}>${bTech.elem1}</li>
    <li ${bTech.elem2src}>${bTech.elem2}</li>
    <li ${bTech.elem3src}>${bTech.elem3}</li>
    <li ${bTech.elem4src}>${bTech.elem4}</li>
    <li ${bTech.elem5src}>${bTech.elem5}</li>
    <li ${bTech.elem6src}>${bTech.elem6}</li>
    <li ${bTech.elem7src}>${bTech.elem7}</li>
    </ul>`
    }else if(course="m-tech:"){
        bl.innerHTML=`<ul>
        <li ${mTech.elem1src}>${mTech.elem1}</li>
        <li ${mTech.elem2src}>${mTech.elem2}</li>
        <li ${mTech.elem3src}>${mTech.elem3}</li>
        <li ${mTech.elem4src}>${mTech.elem4}</li>
        <li ${mTech.elem5src}>${mTech.elem5}</li>
        <li ${mTech.elem6src}>${mTech.elem6}</li>
        <li ${mTech.elem7src}>${mTech.elem7}</li>
        </ul>`  
    }else if(course="mba:"){
        bl.innerHTML=`<ul>
        <li ${mba.elem1src}>${mba.elem1}</li>
        <li ${mba.elem2src}>${mba.elem2}</li>
        <li ${mba.elem3src}>${mba.elem3}</li>
        <li ${mba.elem4src}>${mba.elem4}</li>
        <li ${mba.elem5src}>${mba.elem5}</li>
        <li ${mba.elem6src}>${mba.elem6}</li>
        <li ${mba.elem7src}>${mba.elem7}</li>
        </ul>`
    }else if(course="mca:"){
        bl.innerHTML=`<ul>
        <li ${mba.elem1src}>${mba.elem1}</li>
        <li ${mba.elem2src}>${mba.elem2}</li>
        <li ${mba.elem3src}>${mba.elem3}</li>
        <li ${mba.elem4src}>${mba.elem4}</li>
        <li ${mba.elem5src}>${mba.elem5}</li>
        <li ${mba.elem6src}>${mba.elem6}</li>
        <li ${mba.elem7src}>${mba.elem7}</li>
        </ul>` 
    }else if(course="diplamo:"){
        bl.innerHTML=`<ul>
        <li ${mba.elem1src}>${mba.elem1}</li>
        <li ${mba.elem2src}>${mba.elem2}</li>
        <li ${mba.elem3src}>${mba.elem3}</li>
        <li ${mba.elem4src}>${mba.elem4}</li>
        <li ${mba.elem5src}>${mba.elem5}</li>
        <li ${mba.elem6src}>${mba.elem6}</li>
        <li ${mba.elem7src}>${mba.elem7}</li>
        </ul>`
    }else if(course="ece:"){
        bl.innerHTML=`<ul>
        <li ${mba.elem1src}>${mba.elem1}</li>
        <li ${mba.elem2src}>${mba.elem2}</li>
        <li ${mba.elem3src}>${mba.elem3}</li>
        <li ${mba.elem4src}>${mba.elem4}</li>
        <li ${mba.elem5src}>${mba.elem5}</li>
        <li ${mba.elem6src}>${mba.elem6}</li>
        <li ${mba.elem7src}>${mba.elem7}</li>
        </ul>`
    }else if(course="civil:"){
        bl.innerHTML=`<ul>
        <li ${mba.elem1src}>${mba.elem1}</li>
        <li ${mba.elem2src}>${mba.elem2}</li>
        <li ${mba.elem3src}>${mba.elem3}</li>
        <li ${mba.elem4src}>${mba.elem4}</li>
        <li ${mba.elem5src}>${mba.elem5}</li>
        <li ${mba.elem6src}>${mba.elem6}</li>
        <li ${mba.elem7src}>${mba.elem7}</li>
        </ul>`
    }
    let courseVar=document.querySelector('#course').innerHTML=course;
}
function files(file){
    let fileBox=document.querySelector('#file-box')
    fileBox.src=file;
}
window.addEventListener('load',function(){
    let loading=this.document.querySelector('.loading')
    let loader=this.document.querySelector('.loader')
    loading.style.display="none"
    loader.style.animation="none"
  })
  