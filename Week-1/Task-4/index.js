


let upper = document.querySelector(".upper");
window.onscroll=function(){
    if(window.scrollY>100){
        upper.classList.remove("hide");
    }
    else{
        upper.classList.add("hide");
    }
}


upper.addEventListener("click",function(){

    window.scrollTo({ top: 0, behavior: 'smooth' });
});



let bars = document.querySelector(".bars");
let list = document.querySelector(".list-screen");

bars.addEventListener("click",()=>{
    list.classList.toggle("hide");
})