// 3)შექმენით ფუნქცია რომელიც სიიდან ამოიღებს ყველა ელემენტს და დააბრუნებს ახალ სიას სადაც მხოლოდ 5 სიმბოლოზე მეტი სიტყვები მოხვდებიან

let sia = ["gamarjoba", "rogorxar?", "kai"]
let newArr = []

let final = sia.map((element) => {
    if (element.length > 5) {
        newArr = element
        return newArr
    }


})
console.log(final)