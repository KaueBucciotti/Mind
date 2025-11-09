function dados() {
   
    const ds = [
                   {id:1, login:"carlos", password:"811922", email:"carlos@gmail.com"}, //[0]
                   {id:1, login:"marques", password:"808387", email:"marques@gmail.com"}, //[1]
                   {id:1, login:"zico", password:"920313", email:"zico@gmail.com"} //[2]
               ]
 
    return ds
 
}
 
const usuarios = dados()
 
//console.log("O seu login é: " + usuarios[0].login + "\n A senha sua é: " + usuarios[0].password)
 
//let log = document.querySelector("login").value
//let senha = document.querySelector("password").value
 
function login() {
 
let log = document.querySelector("login").value
let senha = document.querySelector("password").value
 
if (log == usuarios[0].login && senha == usuarios[0].password) {
    console.log("Você Logou!")
}
 
}