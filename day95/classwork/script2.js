// 2)შექმენით სია სადაც გექნებათ რენდომ რიცხვები , შემდეგ ამ რიცხვებს გაფილტრავთ და ამოიღებთ მხოლოდ უარყოფით რიცხვებს , შემდეგ ამ სიას გადამაპავთ და თითოეულ ელემენტს გადააქცევთ დადებით რიცხვად

let numbers = [-1 , 4  , 6 , -5]

let final = numbers.filter((element)=>{
    return element < 0 
})

let final1 = final.map((element) => {
    return element * -1
})
console.log(final1)


