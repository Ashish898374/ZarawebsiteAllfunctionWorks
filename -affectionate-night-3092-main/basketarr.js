
// let h=0
let data_basket=JSON.parse(localStorage.getItem("basket-product")) || []
console.log(data_basket)
// let totals=data_basket.reduce(function(count,el){
   //  return count+Number(el.price)
// },0)
// document.getElementById("total_price").innerText=totals
// console.log(totals)


console.log(data_basket)
data_basket.forEach(el=> {
     let con=document.getElementById("append_basket")
    let con_child=document.createElement("div")
    con_child.setAttribute("id","con_child")


    let child=document.createElement("div")
    child.setAttribute("id","child")
    let img=document.createElement("img")
    img.src=el.images.image[0]
    img.setAttribute("id","data_img")
    child.append(img)


     let child1=document.createElement("div")
     child1.setAttribute("id","child1")
     let title=document.createElement("p")
     title.innerText=el.title
    
     let color=document.createElement("p")
     color.innerText="Color"+" "+":"+" "+el.color
     color.setAttribute("id","clr")

     let size=document.createElement("button")
     size.innerText="One Size"
     size.setAttribute("id","sz")

     child1.append(title,color,size)


     let child2=document.createElement("div")
     child2.setAttribute("id","child2")
     let price=document.createElement("p")
     price.innerText="$"+el.price

     child2.append(price)

     let child3=document.createElement("div")
     child3.setAttribute("id","child3")
     let qtys=document.createElement("select")
     qtys.addEventListener("change",function(){
        
      let x=Number(qtys.value)
      let r=Number(el.price)*x
      total.innerText=r
      document.getElementById("total_price").innerText=total.innerText
      let d=document.getElementById("total_text").innerText=total.innerText
      localStorage.setItem("p",JSON.stringify(d))
     })
  

    
     let op1=document.createElement("option")
     op1.innerText="1"
     qtys.add(op1)
     let op2=document.createElement("option")
     op2.innerText="2"
     qtys.add(op2)
     let op3=document.createElement("option")
     op3.innerText="3"
     qtys.add(op3)
     let op4=document.createElement("option")
     op4.innerText="4"
     qtys.add(op4)
     let op5=document.createElement("option")
     op5.innerText="5"
     qtys.add(op5)
     let op6=document.createElement("option")
     op6.innerText="6"
     qtys.add(op6)
     let op7=document.createElement("option")
     op7.innerText="7"
     qtys.add(op7)
     let op8=document.createElement("option")
     op8.innerText="8"
     qtys.add(op8)
     let op9=document.createElement("option")
     op9.innerText="9"
     qtys.add(op9)
     let op10=document.createElement("option")
     op10.innerText="10"
     qtys.add(op10)
     let op11=document.createElement("option")
     op11.innerText="11"
     qtys.add(op11)
     let op12=document.createElement("option")
     op12.innerText="12"
     qtys.add(op12)
     let op13=document.createElement("option")
     op13.innerText="13"
     qtys.add(op13)
     let op14=document.createElement("option")
     op14.innerText="14"
     qtys.add(op14)
     let op15=document.createElement("option")
     op15.innerText="15"
     qtys.add(op15)
    
     child3.append(qtys)

     let child4=document.createElement("div")
     child4.setAttribute("id","child4")

     let total=document.createElement("p")
     total.innerText="$"+el.price
    //  document.getElementById("total_price").innerText="$"+el.price
     document.getElementById("total_price").innerText=total.innerText

     document.getElementById("total_text").innerText=total.innerText
     let remove=document.createElement("a")
     remove.href="#"
     remove.innerText="Remove"
     remove.setAttribute("id","remove")
     remove.addEventListener("click",function(){
        data_basket.splice(index,1)
        localStorage.setItem("basket-product",JSON.stringify(data_basket))
        window.location.reload()
     })
     child4.append(total,remove)
    let x=  document.createElement("div")
    x.setAttribute("id","x")
  con_child.append(child,child1,child2,child3,child4,x)
  con.append(con_child)
});


document.getElementById("checkout_btn").addEventListener("click",function(){
  window.location.href="payment.html"
})