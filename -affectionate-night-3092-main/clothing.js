let getdata=async()=>{

    let res =await fetch(`https://anthologie123.herokuapp.com/clothing`)
    let  data=await res.json();
    
    console.log(data)
    
    append_shoes(data)
    
}
getdata()


const append_shoes=(data)=>{
    
    let con=document.getElementById("dress_append")
    con.innerHTML=null
   let count=0
   
    data.forEach(el=> {
      count++
          let div=document.createElement("div")
          div.addEventListener('click',()=>{
            localStorage.setItem('masai-product',JSON.stringify(el))
            window.location.href="/basket.html"
          })
        let one=el.images.image[0]
        let two=el.images.image[1]
          let img=document.createElement("img")
          img.src=el.images.image[0]
          img.addEventListener("mouseover",function(){
            let x= img.src=two
         })
         img.addEventListener("mouseout",function(){
            img.src=one
          })
          
       

          let title=document.createElement("p")
          title.innerText=el.title
          title.setAttribute("id","title")
          title.addEventListener("mouseover",function(){
            title.style.color="#1a85b7"
         })
         title.addEventListener("mouseout",function(){
            title.style.color="#26262C"
          })
          
          let price=document.createElement("p")
          price.innerText=`$${el.price}.00`

          div.append(img,title,price)
          con.append(div)
      document.getElementById("total").innerText=count+" "+"Product"
    });
}
let sortingfun=async()=>{
    
    let res =await fetch(`https://anthologie123.herokuapp.com/clothing`)
    let  data=await res.json();
    let x=data
    var select=document.getElementById("select-value").value;
    // console.log(select)
    if(select=="htl"){
    x.sort(function(a,b){
        let s=+a.price
        let y=+b.price
       if(s>y){
        return -1
       }
       if(s<y){
        return 1
       }
       return 0
    })
    append_shoes(x)
 } 
 if(select=="lth"){
    x.sort(function(a,b){
        let s=+a.price
        let y=+b.price
       if(s<y){
        return -1
       }
       if(s>y){
        return 1
       }
       return 0
    })
    append_shoes(x)
 } 
 if(select=="atz"){
    x.sort(function(a,b){
        let s=a.title
        let y=b.title
       if(s<y){
        return -1
       }
       if(s>y){
        return 1
       }
       return 0
    })
    append_shoes(x)
 } 
 if(select=="zta"){
    x.sort(function(a,b){
        let s=a.title
        let y=b.title
       if(s>y){
        return -1
       }
       if(s<y){
        return 1
       }
       return 0
    })
    append_shoes(x)
 } 
}