// console.log('hi')
let slider1=["https://images.ctfassets.net/5de70he6op10/1Ebf1y2snuYnAlwoADLMNF/4ea7de3d273f8b65b320404193d4ce71/ALiving_HPG_LS_01-1.jpg?w=2640&q=80&fm=webp",
"https://images.ctfassets.net/5de70he6op10/47UPUcQOjqSNNzw0ccyNWI/7c4d667792b38738676ed9fd27df19b2/ALiving_HPG_LS_01-2.jpg?w=2640&q=80&fm=webp",
"https://images.ctfassets.net/5de70he6op10/6duTt8ffy7S1pI42UydWLw/eb91b7f7c9dc17a29d93bde91f9618a5/ALiving_HPG_LS_01-3.jpg?w=2640&q=80&fm=webp"]

let cont1= document.getElementById('slide1')
// cont1.onclick=refer1()
let img=document.createElement('img');
img.src=slider1[0]
cont1.append(img)
let i=1
setInterval(() => {
    // console.log(i)
    if(i<=2){
        // cont1.innerHTML=null
        img.src=slider1[i]
    i++
    }else{
        img.src=slider1[0]
        i=1
    }
}, 5000);
// setInterval(() => {
    
// }, interval);

// for slider 2
function slide2(){
    let slider2=["https://images.ctfassets.net/5de70he6op10/1pifG2kO6GWVOdlEV1Pt5y/c6a562badf73b962b4ebc8de292c6a45/ALiving_HPG_LS_03-1.jpg?w=2640&q=80&fm=webp",
"https://images.ctfassets.net/5de70he6op10/3fasheI4mSTe0L00FNRS9Y/80a4a0262f909da195ec2cbed2f9a80a/ALiving_HPG_LS_01-2.jpg?w=2640&q=80&fm=webp",
"https://images.ctfassets.net/5de70he6op10/1HXAUWVGVHYAK66Scr1jPP/cf9559d34af8407272ced0c579105676/ALiving_HPG_LS_01-3.jpg?w=2640&q=80&fm=webp"]

let cont2= document.getElementById('slide2')
// cont2.onclick=refer2()
let img2=document.createElement('img');
// img2.style.border="1px solid cyan"
img2.src=slider2[0]
cont2.append(img2)
let j=1
setInterval(() => {
    // console.log(j)
    if(j<=2){
        // cont1.innerHTML=null
        img2.src=slider2[j]
    j++
    }else{
        img2.src=slider2[0]
        j=1
    }
}, 3000);
}
slide2()

