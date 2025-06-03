
// 2)შექმენით სია სადაც გექნებათ 5 ობიექტი , ამ ობიექტებში შეინახავთ მომხმარებლის სახელს და ასაკს , თქვენი დავალებაა გაფილტროთ ეს სია და დატობოთ მხოლოდ იმ მომხმარებლის ობიექტები ვისი ასაკიც მეტი ან ტოლი იქნება 18 ზე


let sia = [
    {
        namee: "luka",
        age: 15,
    },

    {
        namee:"nika",
        age:13
    },
    {
        namee:"gio",
        age:21,
    },
    {
        namee:"saba",
        age:18
    },
    {
        namee:"irakli",
        age:7
    }
]
let final = sia.filter((element) =>{
    return element.age >= 18
})
console.log(final)