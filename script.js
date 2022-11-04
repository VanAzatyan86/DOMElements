
let myHeader = document.querySelectorAll(".active li");
let btn = document.getElementsByClassName("btnReadMore");
let main = document.querySelectorAll(".mainBlocks");

for(let i=0;i < myHeader.length;i++){
myHeader[i].style = `color:#515151;`
myHeader[i].addEventListener("mouseover", function(){
    myHeader[i].classList.add("headerLiStyle")
});
myHeader[i].addEventListener("mouseout", function(){
    myHeader[i].classList.remove("headerLiStyle")
})
}

for(let i=0;i < main.length;i++){
   main[i].firstElementChild.nextElementSibling.classList.add("mainBloksH5");
   main[i].lastElementChild.classList.add("mainBloksP");
    }
