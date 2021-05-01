let bars = [];

for(let i=0;i<100;++i){
    let bar = Math.floor(Math.random()*100 + 1);
    bars.push(bar);

    let bardiv = document.createElement("div");
    bardiv.classList.add("bars");
    bardiv.style.height = bar*4 + "px";
    document.getElementById('all-bars').appendChild(bardiv);
}

