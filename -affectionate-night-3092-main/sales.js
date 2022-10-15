async function product(){
    let url1=`https://anthologie123.herokuapp.com/sales`
    try{
        let res = await fetch(url1);
        let data =await res.json()
        console.log(data)
        // arr.push(data)
        append(data);
    }catch(error){
        console.log(error)
    }
  }
    
  product()

  // console.log(data.length)
        
  // var no_item = document.getElementById("no_items")
  //  no_item.innerText=23 products;
    
   var product1 = document.getElementById("product1");
  function append(arr){
    arr.forEach((elem) => {
      
        var div = document.createElement("div")
        div.setAttribute("class","cart")
        var img = document.createElement("img")
        img.src=elem.images.image[0]
        img.setAttribute("id","cloth_img")
        var product_name =document.createElement("p")
        product_name.setAttribute("id","p_name")
        product_name.innerText=elem.title
        var price = document.createElement("p");
        price.innerText="$"+elem.price;
        price.style.fontSize="13px";
        price.style.color="#26262C"
        // var c = document.createElement("img")
        // c.style.width="26px"
        // c.style.height="26px"
        // c.style.border="1px solid #939395"
         
        // c.src="https://www.asianpaints.com/content/dam/asian_paints/colours/swatches/L124.png.transform/cc-width-720-height-540/image.png"
        var brand = document.createElement("p")
        brand.innerText=elem.brand;
        brand.style.fontSize="13px"
        brand.style.lineHeight="23.4px"
        brand.style.color="#5C5C5F"
        div.append(img,product_name,price,brand)
        product1.append(div)
    });
 

    function sale(){
        window.location.reload();
    }
  
  
  }

  