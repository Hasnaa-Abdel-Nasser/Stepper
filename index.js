let count = 1;
let nextButton = document.getElementById('next'); 
let prevButton = document.getElementById('prev'); 
let number = document.querySelectorAll('.number')
let spaceChecked = document.querySelectorAll('.space-checked')
let space = document.querySelectorAll('.space')
nextButton.addEventListener('click', ()=>{
    if(count >= 1 && count <= 3){
        nextButton.style.cssText=`background-color:rgb(98, 134, 235); cursor: pointer;`
        count++;
    }if(count == 4){
        nextButton.style.cssText=`background-color:rgb(234, 234, 234); cursor: not-allowed;`
    }
    prevButton.style.cssText=`background-color:rgb(98, 134, 235); cursor: pointer;`;
    if(count>=1 && count<=4){
        spaceChecked[count-2].style.width='0%';
        space[count-2].style.width='25%';
        number[count-1].style.cssText=` border: 3px solid rgb(98, 134, 235); transition: 2s ease-in-out;`
    }
})

prevButton.addEventListener("click", ()=>{
    if(count >=2 && count <= 4){
        prevButton.style.cssText=`background-color:rgb(98, 134, 235); cursor: pointer;`        
        count--;
    }if(count == 1){
        prevButton.style.cssText=`background-color:rgb(234, 234, 234); cursor: not-allowed;`
    }
    nextButton.style.cssText=`background-color:rgb(98, 134, 235); cursor: pointer;`;
    if(count>=1 && count<=4){
        spaceChecked[count-1].style.width='25%';
        space[count-1].style.width='0%';
        number[count].style.cssText=` border: 3px solid rgb(234, 234, 234);`
    }
})