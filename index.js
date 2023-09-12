function fordisplay(val){
    document.getElementById('ans').value += val
    return val
}

function shouldsolve(){
    let val1 = document.getElementById('ans').value
    let val2 = eval(val1);
    document.getElementById('ans').value = val2
    return val2
}

function toclear(){
    document.getElementById('ans').value = ''
}
