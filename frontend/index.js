const value=document.getElementById("value")
const form=document.querySelector("form")
let shayari=document.getElementById("shayari")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
console.log(value.value)
fetch(`https://shayari-backend-ganm.onrender.com/shayari?keyword=${value.value}`)
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
    shayari.value=data.shayari

}).catch((err)=>{
    console.log(err)
})
})

