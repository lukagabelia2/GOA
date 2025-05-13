let angarishi1 = document.getElementById("angarishi1")

let angarishi2 = document.getElementById("angarishi2")

let won = document.getElementById("won")

let burtula = document.getElementsByClassName("burtula")

let idk = document.getElementsByClassName("idk")

let start = document.getElementById("start")
let counter1 = 0
let counter2 = 0


start.addEventListener("click", function () {

    let random1 = Math.floor(Math.random() * 6) + 1
    console.log(random1)
    let radnom2 = Math.floor(Math.random() * 6) + 1

    switch (random1) {
        case 1:
            idk[0].style.display = "flex"
            idk[1].style.display = "none"
            idk[2].style.display = "none"
            idk[3].style.display = "none"
            idk[4].style.display = "none"
            idk[5].style.display = "none"
            break
        case 2:
            idk[0].style.display = "flex"
            idk[1].style.display = "flex"
            idk[2].style.display = "none"
            idk[3].style.display = "none"
            idk[4].style.display = "none"
            idk[5].style.display = "none"
            break
        case 3:
            idk[0].style.display = "flex"
            idk[1].style.display = "flex"
            idk[2].style.display = "flex"
            idk[3].style.display = "none"
            idk[4].style.display = "none"
            idk[5].style.display = "none"
            break
        case 4:
            idk[0].style.display = "flex"
            idk[1].style.display = "flex"
            idk[2].style.display = "flex"
            idk[3].style.display = "flex"
            idk[4].style.display = "none"
            idk[5].style.display = "none"
            break
        case 5:
            idk[0].style.display = "flex"
            idk[1].style.display = "flex"
            idk[2].style.display = "flex"
            idk[3].style.display = "flex"
            idk[4].style.display = "flex"
            idk[5].style.display = "none"
            break
        case 6:
            idk[0].style.display = "flex"
            idk[1].style.display = "flex"
            idk[2].style.display = "flex"
            idk[3].style.display = "flex"
            idk[4].style.display = "flex"
            idk[5].style.display = "flex"
            break
    }

    switch (radnom2) {
        case 1:
            idk[6].style.display = "flex"
            idk[7].style.display = "none"
            idk[8].style.display = "none"
            idk[9].style.display = "none"
            idk[10].style.display = "none"
            idk[11].style.display = "none"
            break
        case 2:
            idk[6].style.display = "flex"
            idk[7].style.display = "flex"
            idk[8].style.display = "none"
            idk[9].style.display = "none"
            idk[10].style.display = "none"
            idk[11].style.display = "none"
            break
        case 3:
            idk[6].style.display = "flex"
            idk[7].style.display = "flex"
            idk[8].style.display = "flex"
            idk[9].style.display = "none"
            idk[10].style.display = "none"
            idk[11].style.display = "none"
            break
        case 4:
            idk[6].style.display = "flex"
            idk[7].style.display = "flex"
            idk[8].style.display = "flex"
            idk[9].style.display = "flex"
            idk[10].style.display = "none"
            idk[11].style.display = "none"
            break
        case 5:
            idk[6].style.display = "flex"
            idk[7].style.display = "flex"
            idk[8].style.display = "flex"
            idk[9].style.display = "flex"
            idk[10].style.display = "flex"
            idk[11].style.display = "none"
            break
        case 6:
            idk[6].style.display = "flex"
            idk[7].style.display = "flex"
            idk[8].style.display = "flex"
            idk[9].style.display = "flex"
            idk[10].style.display = "flex"
            idk[11].style.display = "flex"
            break


    }

    if (random1 > radnom2) {
        won.innerText = "PLAYER 1 WON"
        counter1++
        angarishi1.innerText  = counter1

    }
    else if (random1 === radnom2){
        won.innerText = "DRAW" 
    }
    else if (random1<radnom2) {
        won.innerText = "PLAYER 2 WON"
        counter2++
        angarishi2.innerText  = counter2
    }

})
