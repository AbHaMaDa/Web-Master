


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
