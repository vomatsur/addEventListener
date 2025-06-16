const body=document.getElementsByTagName("body")[0];


 function bos(){
     body.style.backgroundColor="black";
}
const input=document.getElementById("input");
const send=document.getElementById("btn");
const plus=document.getElementById("plus");
const minus=document.getElementById("minus");
const colorInput=document.getElementById("colorInput");
const sonH1=document.getElementById("son");

send.addEventListener("click",()=>{
    sonH1.textContent=input.value;
})
plus.addEventListener("click",()=>{
    sonH1.textContent=+sonH1.textContent+1;
})


minus.addEventListener("click",()=>{
    sonH1.textContent=sonH1.textContent-1;
})