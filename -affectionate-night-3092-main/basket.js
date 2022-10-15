



// function imageZoom(imgID, resultID) {
    let img, lens, result, cx, cy;
    img = document.getElementById("myimage");
    result = document.getElementById("myresult");
    /*create lens:*/
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /*insert lens:*/
    
    /*set background properties for the result DIV:*/
    
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);

    lens.addEventListener("mouseleave", sandy);
    img.addEventListener("mouseleave", sandy);
    
    /*and also for touch screens:*/
    lens.addEventListener("touchleave", sandy);
    img.addEventListener("touchleave", sandy);
    
    function moveLens(e) {
       
        img.parentElement.insertBefore(lens, img);
        /*calculate the ratio between result DIV and lens:*/
        cx = result.offsetWidth / lens.offsetWidth;
        cy = result.offsetHeight / lens.offsetHeight;
        

        var x=document.getElementById("myresult")
        x.innerHTML=null
        result.style.backgroundImage = "url('" + img.src + "')";
        result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";

      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      /*calculate the position of the lens:*/
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      /*prevent the lens from being positioned outside the image:*/
      if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
      if (x < 0) {x = 0;}
      if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
      if (y < 0) {y = 0;}
      /*set the position of the lens:*/
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /*display what the lens "sees":*/
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
      
       
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
//   }

//   imageZoom("myimage", "myresult");

let masai_data=JSON.parse(localStorage.getItem("masai-product"))
console.log(masai_data)
let arr_basket=JSON.parse(localStorage.getItem("basket-product")) || []
console.log(arr_basket)
let div=document.getElementById("myresult")
 function sandy(){
    
    let img1=document.createElement("div")
    
     let title=document.createElement("h2")
     title.innerText=masai_data.title

     let brand=document.createElement("p")
     brand.innerText=masai_data.brand
     brand.setAttribute("id","brand")

     let rating=document.createElement("img")
     rating.src=masai_data.rating
     rating.setAttribute("id","rating")
     
     let price=document.createElement("p")
     price.innerText="$"+masai_data.price
     price.setAttribute("id","price")

    let interest=document.createElement("p")
    interest.innerText="Or 4 interest-free installments of $50.00 with"
    interest.setAttribute("id","interest")

     let c_div=document.createElement("div")
     c_div.setAttribute("id","c_div")
     c_img1=document.createElement("img")
     c_img1.src="https://www.anthropologie.com/static/v3/images/klarna-logo-ea32669636986d0317f95f0c04fdcb6d.svg"

     let middle_img=document.createElement("p")
     middle_img.innerText="or"

     let c_img2=document.createElement("img")
     c_img2.src="https://www.anthropologie.com/static/v3/images/afterpay-logo-7904b549fb7a2a970c606efc9f1e8260.svg"

     c_div.append(c_img1,middle_img,c_img2)

     let online=document.createElement("p")
     online.innerText="Online Exclusive"
     online.setAttribute("id","online")

     let line=document.createElement("div")
     line.setAttribute("id","line")
    
    let color=document.createElement("p")
    color.innerText="Color"+" "+":"+" "+masai_data.color
    color.setAttribute("id","color")
    
     let basket_div=document.craet
     let basket_btn=document.createElement("button")
     basket_btn.innerText="ADD TO BASKET"
     basket_btn.setAttribute("id","basket_btn")
     basket_btn.addEventListener("click",function(){
      arr_basket.push(masai_data)
      localStorage.setItem("basket-product",JSON.stringify(arr_basket))
      window.location.href="basketarr.html"
     })
      
     let icon=document.createElement("div_icon")
     icon.setAttribute("id","icon")
     let icon_img=document.createElement("img")
     icon_img.src="https://cdn2.iconfinder.com/data/icons/mobile-banking-and-pay-online-2/66/82-512.png"

     let free=document.createElement("p")
     free.innerText="Free In Store Pick Up"
    
     let divs=document.createElement("div")
     let add=document.createElement("p")
     add.innerText="Please enter a location to check store availability."
     divs.setAttribute("id","divs")

     let a=document.createElement("a")
     a.innerText="Check Nearby Stores"
     a.href="#"

     let line1=document.createElement("div")
     line1.setAttribute("id","line1")

     let detail=document.createElement("div")
     detail.setAttribute("id","detail_div")
     let product_tex=document.createElement("h1")
     product_tex.setAttribute("id","product_text")
     product_tex.innerText="Product Details"
     let plus=document.createElement("h2")
     plus.innerText="+"

     let detaildata=document.createElement("p")
     detaildata.innerText=masai_data.productDetails
     detaildata.setAttribute("id","detaildata")
     plus.addEventListener("click",function(){
      document.getElementById("detail_div").style.height="100px"
      plus.innerText="-"
      detail.append(detaildata)
      plus.addEventListener("click",function(){
        document.getElementById("detail_div").style.height="65px"
      plus.innerText="+"
      document.getElementById("detaildata").style.display="none"
      })
     })

     detail.append(product_tex,plus)

     divs.append(add,a)
      icon.append(icon_img,free)

     img1.append(title,brand,rating,price,interest,c_div,online,line,color,basket_btn)
    div.append(img1,icon,divs,line1,detail)
    
 }

 
sandy()

let ashish=masai_data.images.image
document.getElementById("myimage").src=ashish[0]
     console.log(ashish)
    ashish.forEach(el => {
        
        
        // console.log(ashish[i])
          let div_img=document.createElement("div")
        //   console.log(el)
          let img=document.createElement("img")
          img.setAttribute("id","pop")
          img.src=el
          let a=document.getElementById("myimage")
        //   a.innerHTML=null
          img.addEventListener("click",function(el){
            
             let x=img.src
            document.getElementById("myimage").src=x
          })
            
          div_img.append(img)
          imgs_container.append(div_img)
        })
       

