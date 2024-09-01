let intrvalid
// Gets slider elements 

var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

// get number of slide 
var slideNumber = sliderImages.length;

// set current slid 

var currentslide = 1 ;

// ele shows slide  number 

var slideEleNum= document.getElementById("slide-number");

// prev & next buttons 
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");

// handling click on prev & next btns

prevBtn.onclick = prevSlide;

nextBtn.onclick = nextSlide;

// creating ul list 

var list= document.createElement("ul");

list.setAttribute("id","list ul");
list.classList.add("list","flex");

// create li for list and add them to ul  & addin ul to the page

for (let i = 0; i < slideNumber; i++) {
    let eleList = document.createElement("li");
    eleList.setAttribute("id",i+1);
    eleList.append(document.createTextNode(i+1));

    list.appendChild(eleList);
    
}

document.getElementById("indicators").appendChild(list);


// making an array of li eles

let lis=document.querySelectorAll(".list li ");
 
// loop through all lis
lis.forEach((e)=>{
    e.onclick=()=>{
        currentslide = parseInt(e.getAttribute("id"));
        clearInterval(intrvalid);
        timer();
        checker();
    }
})
 
// activating the method checker

checker();







// functions used 

function checker(){
    slideEleNum.innerHTML = `Slide # ${currentslide} Of ${slideNumber}` 

    //using method to remove all active classes
    removeActiveAll();

    // activiting the defualt eles
    sliderImages[currentslide-1].classList.add("active");
    list.children[currentslide-1].classList.add("active");
}

function prevSlide(){
     clearInterval(intrvalid);
    timer();
    if (currentslide==1) {

        currentslide= slideNumber;

        checker();
    }else{

    currentslide--;

    checker();
    }

   

};

function nextSlide(){
    clearInterval(intrvalid);
    timer();

    

    if (currentslide== slideNumber) {

        currentslide= 1;

        checker();
    }else{

    currentslide++;

    checker();
    }
}


// that is for deleting class active
function removeActiveAll(){
    sliderImages.forEach(e => {
        e.classList.remove("active");  
    });
    lis.forEach(e => {
        e.classList.remove("active");  
    });
   
}

// changing slider automaticlt

function timer(){

intrvalid = setInterval(() => {
    nextBtn.click(); 
}, 5000);

}

timer();


