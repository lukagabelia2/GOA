// დაამატეთ საიტზე ფოტო, რომელზე მაუსის გადატარებისას, უნდა შეიცვალოს ეს ფოტო. მაუსის გაწევისას კი დაუბრუნდეს ისევ საწყის ფოტოს.

let img = document.getElementById("img")

function mouseout(){
    img.src = "./1.jpg"
}


img.addEventListener("mouseover" , function(){
    img.src = "./2.jpg" 
})
img.addEventListener("mouseout" ,mouseout)