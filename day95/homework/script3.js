// )შექმენით სია სადაც გექნებათ ობიექტები , ამ ობიექტებში უნდა გქონდეთ სტუდენტის სახელი,გვარი და ქულები, ქულები უნდა იყოს სია , თქვენი დავალებაა გამოთვალოთ ქულების საშუალო შემდეგ გაფილტროთ მთავარი სია, ვისი საშუალო ქულაც იქნება მეტი ან ტოლი 90-ზე ისინი გადაიტანეთ გაფილტრულ სიაში , შემდეგ map()-ის საშუალებით გადაუარეთ გაფილტრულ სიას და დააბრუნეთ ახალ სიაში მხოლოდ სტუდენტის სახელები

let sia = [
    {
        name: "saba",
        surname: "arvici",
        score: [100, 100, 100, 100]
    },
    {
        namee: "nika",
        surname: "kaldze",
        score: [50, 40, 50, 10, 60]
    },
    {
        namee: "gio",
        surname: "gocha",
        score: [60, 30, 10, 25,]
    },

    {
        name: "dagupuli",
        surname: "dagupuladze",
        score: [10, 30, 20, 5]
    }
]



let final = sia.filter((Element) => {
    let sum = 0
    for (let i of Element.score) {
        sum += i

    }
    return sum / Element.score.length >90

})
// console.log(final)
let imenafinal = final.map((element)=>{
    return element.name
})

console.log(final , imenafinal)