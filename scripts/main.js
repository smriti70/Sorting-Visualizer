let bars = [];

bars = newArray();

document.getElementById("new-array").addEventListener("click", () => {
    bars = newArray(bars);
});

document.getElementById("bubble-sort").addEventListener("click", () => {
    bars = bubbleSort(bars);
});

document.getElementById("selection-sort").addEventListener("click", () => {
    bars = selectionSort(bars);
});
