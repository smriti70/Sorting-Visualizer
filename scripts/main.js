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
    itmd = [];
    for (let i = 0; i < bars.length; i++) {
        const bardiv = document.createElement("div");
        bardiv.style.height = `${0}px`
        bardiv.classList.add("bars");
        itmd.push(bardiv)
    }
    mergeSort(0,bars.length-1);
});