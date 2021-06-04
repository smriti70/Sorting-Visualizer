let bars = [];
let imtd = [];

bars = newArray();

document.getElementById("new-array").addEventListener("click", () => {
    bars = newArray(bars);
});

document.getElementById("bubble-sort").addEventListener("click", () => {
    bubbleSort(bars);
});

document.getElementById("selection-sort").addEventListener("click", () => {
    selectionSort(bars);
});

document.getElementById("insertion-sort").addEventListener("click", () => {
    insertionSort(bars);
});

document.getElementById("quick-sort").addEventListener("click", () => {
    quickSort(bars,0,bars.length-1);
});

document.getElementById("merge-sort").addEventListener("click", () => {
    mergeSort();
});