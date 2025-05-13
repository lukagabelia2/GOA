// createElement-ის გამოყენებით შექმენით ერთი მშობელი div-ელემენტი, ეს div-ი ჩაამატეთ body-ში , შემდეგ ამ მშობელ div-ში ჩაამატეთ კიდევ ორი შვილი div-ი და განალაგეთ ვერტიკალურად ერთმანეთისგან თანაბარი დაშორებით ,  პირველი დივი იყოს წითელი მეორე იყოს მწვანე , ასევე დაუმატეთ სასურველი სტილები

let body = document.body

let mshobeliDiv = document.createElement("div")
mshobeliDiv.style.width = "400px"
mshobeliDiv.style.height = "400px"
mshobeliDiv.style.backgroundColor = "red"



body.appendChild(mshobeliDiv)


let shvili1 = document.createElement('div')
shvili1.style.width = "100px"
shvili1.style.height = "100px"
shvili1.style.backgroundColor ="black"

mshobeliDiv.appendChild(shvili1)


let shvili2 = document.createElement('div')
shvili2.style.width = "100px"
shvili2.style.height = "100px"
shvili2.style.backgroundColor ="green"

mshobeliDiv.appendChild(shvili2)





