let sum=JSON.parse(localStorage.getItem("sandip")) ||[];
    function getdata(n,s,l,a,A,b,c,r,p,m,){
        this.name=n;
        this.selecs=s;
        this.last=l;
        this.address=a;
        this.add12=A;
        this.box=b;
        this.city=c;
        this.region=r;
        this.post=p;
        this.mobile=m;
    }
    function setdata(){
        let name=document.getElementById("name").value;
        let selecs=document.getElementById("selecs").value;
        let last=document.getElementById("last").value;
        let address=document.getElementById("address").value;
        let Add12=document.getElementById("add12").value;
        let box=document.getElementById("box").value;
        let city=document.getElementById("city").value;
        let regions=document.getElementById("region").value;
        let post=document.getElementById("post").value;
        let mobile=document.getElementById("mobile").value;
        let nam=new  getdata(name,selecs,last,address,Add12,box,city,regions,post,mobile)
        console.log(nam)
        localStorage.setItem("sandip",JSON.stringify(nam))
    
    if(last=="" ||city==""){
        alert("fill the all details")

    }
    else if(name=="" || mobile==""){
     alert ("fill the all details")
    }
    else if(address=="" ||post==""){
        alert ("fill the all detail")

    }
    else if(regions=="" ||Add12==""){
        alert("fill the all deatils")
    }
    
    else{
        alert("successfull payment")
        // window.location.href=""
    }
}

let t=JSON.parse(localStorage.getItem("p"))
document.getElementById("total_text").innerText=t
document.getElementById("total_price").innerText=t
console.log(t)