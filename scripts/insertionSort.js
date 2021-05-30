const insertionSort = async(inputArr) => {
    const n = inputArr.length;
    for(let i=0;i<n;++i){
        console.log(inputArr[i].style.height);
    }
    for (let i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        let current = inputArr[i].style.height;
        let currentHeight = parseInt(inputArr[i].style.height);
        // The last element of our sorted subarray
        let j = i-1; 
        while ((j > -1) && (currentHeight < parseInt(inputArr[j].style.height))) {
            var speed = document.querySelector("#speed");
            var speedOfSorting = speed.value;
            inputArr[j].style.background="red";
            inputArr[j+1].style.background="red";
            
            await new Promise(resolve => setTimeout(() => {resolve()},speedOfSorting));
            inputArr[j+1].style.height = inputArr[j].style.height;
            
            inputArr[j].style.background="green";
            inputArr[j+1].style.background="green";
            j--;
        }
        inputArr[j+1].style.height = current;
    }

    for(let i=0;i<n;++i){
        console.log(inputArr[i].style.height);
    }
}