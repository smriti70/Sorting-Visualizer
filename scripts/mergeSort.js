const mergeSort = async (start, end) => {
   if (start < end) {
      let mid = parseInt((start + end) >> 1)
      await mergeSort(start, mid)
      await mergeSort(mid + 1, end)
      await mergeArray(start, end)
   }
}

const mergeArray = async (start, end) => {
   let mid = parseInt((start + end) >> 1);
   let start1 = start, start2 = mid + 1
   let end1 = mid, end2 = end

   let index = start
 
   while (start1 <= end1 && start2 <= end2) {
      let speed = document.querySelector("#speed");
      let speedOfSorting = Math.abs(speed.value);
      bars[start1].style.background = "red"
      bars[start2].style.background = "red"
       if (parseInt(bars[start1].style.height) <= parseInt(bars[start2].style.height)) {
         await new Promise(resolve => setTimeout(() => {resolve()},speedOfSorting));
           itmd[index].style.height = bars[start1].style.height
           index = index + 1
           start1 = start1 + 1;
       }
       else if(parseInt(bars[start1].style.height) > parseInt(bars[start2].style.height)) {
         await new Promise(resolve => setTimeout(() => {resolve()},speedOfSorting));
           itmd[index].style.height = bars[start2].style.height
           index = index + 1
           start2 = start2 + 1;
       }
   }
 
   while (start1 <= end1) {
      let speed = document.querySelector("#speed");
      let speedOfSorting = Math.abs(speed.value);
      await new Promise(resolve => setTimeout(() => {resolve()},speedOfSorting));
      bars[start1].style.background = "red";
       itmd[index].style.height = bars[start1].style.height
       index = index + 1
       start1 = start1 + 1;
   }
 
   while (start2 <= end2) {
      let speed = document.querySelector("#speed");
      let speedOfSorting = Math.abs(speed.value);
      await new Promise(resolve => setTimeout(() => {resolve()},speedOfSorting));
      bars[start2].style.background = "red";
       itmd[index].style.height = bars[start2].style.height
       index = index + 1
       start2 = start2 + 1;
   }
 
   index = start
   while (index <= end) {
      let speed = document.querySelector("#speed");
      let speedOfSorting = Math.abs(speed.value);
      await new Promise(resolve => setTimeout(() => {resolve()},speedOfSorting));
      bars[index].style.background = "green";
       bars[index].style.height = itmd[index].style.height
       index++;
   }
}