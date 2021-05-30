const selectionSort = async(inputArr) => { 
    const n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            let val1 = parseInt(inputArr[j].style.height);
            let val2 = parseInt(inputArr[min].style.height);
            if(val1 < val2) {
                min=j; 
            }
        }
        let speed = document.querySelector("#speed");
        let speedOfSorting = Math.abs(speed.value);
        if (min !== i) {
             // Swapping the elements
            inputArr[i].style.background="red";
            inputArr[min].style.background="red";

            await new Promise(resolve => setTimeout(() => {resolve()},speedOfSorting));
            swapIt(inputArr[i],inputArr[min]);
            inputArr[i].style.background="green";
            inputArr[min].style.background="green";    
        }
    }
}