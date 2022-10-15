let url=`https://anthologie123.herokuapp.com/gift&candles/?q=Top Rated Gifts`
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
        // append(data)
        categoryName.innerText=`Top Rated Gifts`
        categoryQty.innerText=`${data.length} products`
        sort(data)
        // let abc=data[1].price
        // console.log(abc)
        
        // console.log(data)
    } catch (error) {
        console.log(error)
    }
}


// category.innerText=`Gifts `
function append(data){
    localStorage.setItem("data",JSON.stringify(data))
    let container=document.getElementById('rightDown')
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
// console.log(JSON.parse(localStorage.getItem('sandy')))
// document.querySelector("#sorting").addEventListener("change",handlefilter)
// function handlefilter(data){
//   let selected=document.querySelector("#sorting").value
//   if(selected=="ALL"){
//     append(data)
//     console.log(data)
//   }
//   else if(selected=="HTL"){
//     data.sort(function(a,b){
//         let s=+(a.price)
//         let y=+(b.price)
//        if(s>y){
//         return -1
//        }
//        if(s<y){
//         return 1
//        }
//        return 0
//     })
//     // append(x)
//     append(data)
//     console.log(data)
//   }
//   if(selected=="LTH"){
//      data.sort(function(a,b){
//          let s=+a.price
//          let y=+b.price
//         if(s<y){
//          return -1
//         }
//         if(s>y){
//          return 1
//         }
//         return 0
//      })
//      append(data)
//   } 
//   if(selected=="az"){
//      data.sort(function(a,b){
//          let s=a.title
//          let y=b.title
//         if(s<y){
//          return -1
//         }
//         if(s>y){
//          return 1
//         }
//         return 0
//      })
//      append(data)
//   } 
//   if(selected=="za"){
//      data.sort(function(a,b){
//          let s=a.title
//          let y=b.title
//         if(s>y){
//          return -1
//         }
//         if(s<y){
//          return 1
//         }
//         return 0
//      })
//      append(data)
//   } 
// }

// let sortingfun=()=>{
    
//     // let res =await fetch(`https://anthologie123.herokuapp.com/accessories`)
//     // let  data=await res.json();
//     let x=JSON.parse(localStorage.getItem("sandy"))
//     var select=document.getElementById("sorting").value;
//     // console.log(select)
//     if(select=="HTL"){
//     x.sort(function(a,b){
//         let s=+a.price
//         let y=+b.price
//        if(s>y){
//         return -1
//        }
//        if(s<y){
//         return 1
//        }
//        return 0
//     })
//     append(x)
//  } 
//  if(select=="LTH"){
//     x.sort(function(a,b){
//         let s=+a.price
//         let y=+b.price
//        if(s<y){
//         return -1
//        }
//        if(s>y){
//         return 1
//        }
//        return 0
//     })
//     append(x)
//  } 
//  if(select=="az"){
//     x.sort(function(a,b){
//         let s=a.title
//         let y=b.title
//        if(s<y){
//         return -1
//        }
//        if(s>y){
//         return 1
//        }
//        return 0
//     })
//     append(x)
//  } 
//  if(select=="za"){
//     x.sort(function(a,b){
//         let s=a.title
//         let y=b.title
//        if(s>y){
//         return -1
//        }
//        if(s<y){
//         return 1
//        }
//        return 0
//     })
//     append(x)
//  } 
// }