// შექმენით ობიექტი car , რომელსაც ექნება 5 key -  company(მწარმოებელი) , model , milage ,year , condition , ამ ობიექტში ასევე უნდა იყოს შენახული ფუნქცია , ამ ფუნქციას პარამეტრად ჰქონდეს condition ,და ამ ფუნქციაში შეამოწმეთ , რომ თუ condition-არის კარგი ან ცუდი დაბეჭდეთ შემდეგი ტექსტი car is in {condition} condition გამოიყენეთ format-ი

let car = {
    company : "bmw",
    model : "m4",
    milage : "idk",
    year : 1,
    a : "gadasarevi",
    test(){
        return `ეს მოდელი არის ${this.a} !`
    }
}

console.log(car.test())