const swapIt = (el1,el2) => {

    let height1 = el1.style.height;
    let height2 = el2.style.height;
    // console.log(height1,height2);
    
    el1.style.height = height2;
    el2.style.height = height1;
}
