const newArray = () => {
    let bars = [];
    removeAllChildNodes(document.getElementById('all-bars'));
    let n = document.getElementById("barsNumber").value;
    for(let i=0;i<n;++i){
        let bar = Math.floor(Math.random()*100 + 1);
        let bardiv = document.createElement("div");
        bardiv.classList.add("bars");
        bardiv.style.height = `${bar * 4}px`;
        bars.push(bardiv);
        document.getElementById('all-bars').appendChild(bardiv);
    }
    return bars;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}