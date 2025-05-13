let hexColor = "abcdef0123456789"
let shecvla = document.getElementById("span")
let but = document.getElementById("but")
let body =document.body




but.addEventListener("click", function () {
    let test = "#"
    for (let i = 0; i < 6; i++) {
        let index = (Math.floor(Math.random() * 16))
        test = test +  hexColor[index]
    }

    shecvla.innerHTML = test
    shecvla.style.color = test

    final.style.color = test
    body.style.backgroundColor = test




})