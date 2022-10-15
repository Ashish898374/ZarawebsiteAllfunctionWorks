
let users=[]
console.log('user start = ',users)

class User{
    // #password
    constructor(){

        this.organization='Anthropologie'

        // username and password is being added here from line 52 and 53

    }
    #validateUsername(username){
        
        let value = username.includes('!')? false :true
        // username.includes('')||username.includes('!')||username.includes('#')||username.includes('$')||username.includes('%')||username.includes('^')||username.includes('&')||username.includes('*')||username.includes('(')||username.includes(')')
        return value

    }
    #validatePassword(password){
        let value=password.includes('123')?false:true
        return value;
    }

    login(username,password){
        // console.log("this.username" ,this.username)
        // console.log("this.pass = ",this.password)

        if(username===this.username&&password===this.password){
            alert('login successfull')
        }else{
            alert('Authentication failed')
        }
    }

    signup(username,password,confirmPass){
         let  isValidated = false;
        isValidated = this.#validateUsername(username) && this.#validatePassword(password)&& password===confirmPass
        if(isValidated===true){

            this.username = username
            this.password = password
            users.push(this)

            alert('user registered successfully')
        }else{
            alert('Please Enter correct details')
        }



    }
}
let u1=new User();

// u1.signup('abc@gmail.com','sahil','sahil')
let SignUp=()=>{
    event.preventDefault()
    let email;
    let pass;
    let confirmPass;
    email=document.getElementById('email').value
    pass=document.getElementById('pass').value
    confirmPass=document.getElementById('ConPass').value;
    u1.signup(email,pass,confirmPass)

    email.value=""
    pass.innerHTML=""
    confirmPass.innerHTML=""
    // localStorage.setItem('Users',JSON.stringify(users))
    // console.log(users)
}


let LogIn=()=>{
    event.preventDefault()
    let email=document.getElementById('LoginEmail').value
    console.log(email)
    let pass=document.getElementById('LoginPass').value
    console.log(pass)
    u1.login(email,pass)
    if(u1.login){
        window.location.href="index.html"
    }
}