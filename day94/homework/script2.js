
// 2)შექმენი სია სადაც რენდომულად შეიყვან რამდენიმე სახელს და გვარს , შემდეგ დაწერე ფუნქცია რომელიც დააბუნებს ახალ სიას სადაც წარმოდგენილი იქნება თითოეული სახელი და გვარი ისე როგორც ინიციალები (Giorgi Bibilashvili => G.B)

let names = ["luka gabelia"]
let firstName = ""
let secondName = ""


let names1 = names.map((element) => {
    let news = element.split(" ")
    firstName = news[0][0]
    secondName = news[1][0]

    return firstName + "."+secondName
    
})
console.log(names1)

