// შექმენით დოკუმენტში რამდენიმე ერთნაირი ელემენტი და querySelector()ის და  querySelectorAll() ის გამოყენებით javascript-იდან შეუცვალეთ სტილები

let  p = document.querySelector("p")

p.style.color ="red"

let h1 = document.querySelectorAll("h1")
h1[0].style.color = "blue"
h1[1].style.color = "green"
h1[2].style.color = "purple"