
// ! slider in the header code 
let part = document.querySelector('.part');
let count = document.querySelector('.count');

//todo slider image in the header
let i = 1;

    setInterval(() => {
        if(i<=4){
            part.style.cssText=`left:${i*25}%`;
            count.innerHTML=`0${i+1}`;
            i++;
        }
        if(i>4){
            i=0;
            part.style.cssText=`left:${i}%`;
            count.innerHTML=`0${i+1}`;

        }
        
    }, 3000);

    //! end of the slider

//  reding more ? setting
    let readMores = document.querySelectorAll(".read-more");
    let texts = document.querySelectorAll(".text");


    readMores.forEach(readMore => {
    let passage = readMore.closest(".passage");
        readMore.onclick=()=>{
            passage.style.cssText="height: 120px;";
            readMore.style.cssText="display:none"
        }
});

//! last section slider



let dots = document.querySelectorAll(".dots li");
let k=0;

// automatic slider for dots
function timer (){
    intrvalid =  setInterval(()=>{
        dots.forEach((dot)=>{
            dot.classList.remove("active");
        })
        dots[k+1].classList.add("active");
        k++
        if(k>=(dots.length-1)){
            k=-1;
        }

    },3000);
}

// call the function
timer();

let arrowForword = document.querySelector(".forword");
let arrowBack = document.querySelector(".back");


arrowForword.onclick = ()=>{
        dots.forEach((ele)=>{
            ele.classList.remove("active");
        })
        dots[k+1].classList.add("active");
        k++
        if(k>=(dots.length-1)){
            k=-1;
        }
        clearInterval(intrvalid);
        timer();
    }

    arrowBack.onclick = ()=>{
        dots.forEach((ele)=>{
            ele.classList.remove("active");
        })

        if(k<=0){
            k=dots.length;
            k--
            dots[k].classList.add("active");

        }else{
            k--;
            dots[k].classList.add("active");
        }
        clearInterval(intrvalid);
        timer();
    }






    // todo bar menu


    let menu = document.querySelector(".menu");
    let queue = document.querySelector(".y-line");

    menu.onclick = ()=>{
        queue.classList.toggle("hide");

    }








    let upper = document.querySelector(".upper");
    window.onscroll=function(){
        if(window.scrollY>500){
            upper.classList.remove("hide");
        }
        else{
            upper.classList.add("hide");
        }
    }
    
    
    upper.addEventListener("click",function(){
    
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    