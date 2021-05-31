const disableButtons = () =>{
    let buttons = document.getElementsByClassName('disable-enable');
    for(let i=0;i<buttons.length;++i){
        buttons[i].disabled = true;
    }
    document.getElementById("main-heading").classList.add('main-heading');
}

const enableButtons = () =>{
    let buttons = document.getElementsByClassName('disable-enable');
    for(let i=0;i<buttons.length;++i){
        buttons[i].disabled = false;
    }
    document.getElementById("main-heading").classList.remove('main-heading');
}
