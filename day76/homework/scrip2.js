let h1 = document.getElementsByTagName("h1")
let counter= 0

function damateba(){
    counter++
    h1[0].innerHTML = counter
}

function gamokleba(){
    counter--
    h1[0].innerHTML = counter
}

function toloba(){
    counter = 0
    h1[0].innerHTML = counter
}