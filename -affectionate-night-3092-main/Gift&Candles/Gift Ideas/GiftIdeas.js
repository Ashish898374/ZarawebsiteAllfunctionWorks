let url=`https://anthologie123.herokuapp.com/gift&candles/?q=Gifts by Recipient`
let categoryName=document.getElementById('categoryName')
let categoryQty=document.getElementById('categoryQty')
let sort=(data)=>{
    let x=JSON.parse(localStorage.getItem('data'))
    // let y=x
    // console.log(x)
    // console.log(abc)
    let select=document.getElementById('sorting').value;
    // console.log(select)
    if(select=="ALL"){
        append(data)
        // console.log(abc)
    }
    if(select=="LTH"){
        // showData()
        x.sort(function(a,b){
        //     // console.log(x)
            return a.price-b.price
            
        //     // console.log('b.price = ',b.price)
        })
        // console.log(abc)
        append(x)
    }else if(select=="HTL"){
      x.sort((a,b)=>{
        return b.price-a.price
      })
      append(x)
    }
}
async function showData(){
    try {
        let res=await fetch(url)
        let data=await res.json()
        append(data)
        categoryName.innerText=`Gift Ideas`
        categoryQty.innerText=`${data.length} products`
        // console.log(data)
    } catch (error) {
        console.log(error)
    }
}


// category.innerText=`Gifts `
function append(data){
    let container=document.getElementById('rightDown')
    localStorage.setItem('data',JSON.stringify(data))
    container.innerHTML=null
    data.forEach((el)=>{
        let div = document.createElement('div')
        div.style.cursor="pointer"
        div.addEventListener('click',()=>{
            localStorage.setItem('masai-product',JSON.stringify(el))
            window.location.href="/basket.html"
          })
        div.setAttribute('class','div')
        let img=document.createElement('img')
        img.src=el.images.image[0]
        img.setAttribute('class','img')
        let title=document.createElement('h5')
        title.innerText=el.title
        let price=document.createElement('p')
        price.innerText=`$ ${el.price}`
        let Color=document.createElement('p')
        Color.innerText=el.color

        div.append(img,title,price,Color)
        container.append(div)
    })
}
let addData=(data)=>{
    localStorage.setItem('ProductData',JSON.stringify(data))
    // console.log(JSON.parse(localStorage.getItem('ProductData')))
}
showData()