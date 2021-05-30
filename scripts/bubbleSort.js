const bubbleSort = async(inputArr) => {
    const len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len-i-1; j++) {
            let val1 = parseInt(inputArr[j].style.height); 
            let val2 = parseInt(inputArr[j+1].style.height);
            var speed = document.querySelector("#speed");
            var speedOfSorting = Math.abs(speed.value);
            if (val1 > val2) {
                inputArr[j].style.background="red";
                inputArr[j+1].style.background="red";
                
                await new Promise(resolve => setTimeout(() => {resolve()},speedOfSorting));
                swapIt(inputArr[j],inputArr[j+1]);

                inputArr[j].style.background="green";
                inputArr[j+1].style.background="green";
            }
        }
    }
}
