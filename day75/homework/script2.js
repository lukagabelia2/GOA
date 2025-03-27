// )არსებულ car ობიექტს , ობიექტის გარედან დაამატეთ color  და price  , ასევე ამოშალეთ milage , შემდეგ ყველაფერი გამოსახეთ console-ში 
let car = {
    company : "bmw",
    model : "m4",
    milage : "idk",
    year : 1,
    a : "gadasarevi",
    // test(){
    //     return `ეს მოდელი არის ${this.a} !`
    // }
}

console.log(car.price = 200)
console.log(car.color = "blue")
delete car.milage
console.log(car)