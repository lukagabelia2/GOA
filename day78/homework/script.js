let arr = ["./At8002a1.webp" , "./1.jpg" , "./2.png" , "./3.jpg"]
let caunt = 0
function changeImg(){
    let img = document.getElementById("img")
    caunt++  
    img.src = arr[caunt] 
}

function backImg(){
    let img = document.getElementById("img")
    caunt--
    img.src = arr[caunt]     
    
}




