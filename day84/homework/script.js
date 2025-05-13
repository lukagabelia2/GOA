// Level 84:
// 1)დღეს ახსნილი მასალის გამოყენებით გააკეთეთ, საიტზე მოძრავი ელემენტი კლავიატურის ისრების საშუალებით, შექმენით ერთი ელემენტი რომლის საიტზე ჰორიზონტალურადაც და ვერტიკალურადაც ამოძრავებას შეძლებთ, ისრების გამოყენებით ,  ასევე დაამატეთ სტილი რათა იყოს ლამაზი და smooth


let div = document.querySelector("div")

let x = 0
let y = 0

document.addEventListener("keyup", function (event) {
    console.log(event.key)


    if (event.key == "ArrowRight") {
        x += 10
        div.style = `transform: translate(${x}px, ${y}px);`
    }
    else if (event.key == "ArrowLeft") {
        x -= 10
        div.style = `transform: translate(${x}px, ${y}px);`
    }
    else if (event.key == "ArrowDown") {
        y += 10
        div.style = `transform: translate(${x}px, ${y}px);`
    }
    else if (event.key == "ArrowUp") {
        y -= 10
        div.style = `transform: translate(${x}px, ${y}px);`
    }




})

