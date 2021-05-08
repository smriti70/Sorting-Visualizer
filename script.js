let bars = [];

for(let i=0;i<100;++i){
    let bar = Math.floor(Math.random()*100 + 1);
    let bardiv = document.createElement("div");
    bardiv.classList.add("bars");
    bardiv.style.height = `${bar * 4}px`;
    bars.push(bardiv);
    document.getElementById('all-bars').appendChild(bardiv);
}

document.getElementById("bubble-sort").addEventListener("click",function(){
    bubbleSort(bars);
});

let bubbleSort = (inputArr) => {
    const len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len-i-1; j++) {
            let val1 = parseInt(inputArr[j].style.height); 
            let val2 = parseInt(inputArr[j+1].style.height);
            if (val1 > val2) {
                inputArr[j].style.background="red";
                inputArr[j+1].style.background="red";

                swapIt(inputArr[j],inputArr[j+1]);

                inputArr[j].style.background="green";
                inputArr[j+1].style.background="green";
            }
        }
    }
};


let swapIt = (el1,el2) => {
    let style1 = window.getComputedStyle(el1);
    let style2 = window.getComputedStyle(el2);

    let transform1 = style1.getPropertyValue("height");
    let transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;
}


