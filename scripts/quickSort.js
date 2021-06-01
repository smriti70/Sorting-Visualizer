const quickSort = (arr,start,end) => {
    disableButtons();
    quickSortArray(arr,start,end)
}

const isSorted = (array) =>{
    for(let i=1;i<array.length;++i){
        if(parseInt(array[i].style.height)<parseInt(array[i-1].style.height)){
            return false;
        }
    }
    return true;
}

async function quickSortArray(arr, start, end) {
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let index = await partition(arr, start, end);
    // Recursively apply the same logic to the left and right subarrays
    quickSortArray(arr, start, index - 1);
    quickSortArray(arr, index + 1, end);

    if(isSorted(arr)){
        enableButtons();
    }
}

async function partition(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = parseInt(arr[end].style.height);
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        var speed = document.querySelector("#speed");
        var speedOfSorting = Math.abs(speed.value);
        if (parseInt(arr[i].style.height) < pivotValue) {
        // Swapping elements
        arr[i].style.background="red";
        arr[pivotIndex].style.background="red";
        await new Promise(resolve => setTimeout(() => {resolve()},speedOfSorting));
        swapIt(arr[i],arr[pivotIndex]);
        arr[i].style.background="green";
        arr[pivotIndex].style.background="green";
        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    arr[end].style.background="red";
    arr[pivotIndex].style.background="red";
    await new Promise(resolve => setTimeout(() => {resolve()},speedOfSorting));
    swapIt(arr[pivotIndex],arr[end]);
    arr[end].style.background="green";
    arr[pivotIndex].style.background="green";

    return pivotIndex;
}