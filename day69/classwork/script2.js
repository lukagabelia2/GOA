// მომხმარებელს შემოატანინეთ რიცხვი, შემდეგ შემოატანინეთ არჩევანი(ერთიდან მომხმარებლის რიცხვამდე დაბეჭდოს ლუწი, კენტი, კვადრატი ან 3 ის ჯერადი რიცხვი

let num = Number(prompt("text a name"))
let num1 = 1


let shetavazeba =prompt("რომელი გსურთ?")

while(num1<num){
    if(num1%2==0 && shetavazeba=="ლუწი"){
        console.log(num1)
    }
    else if(num1%2 == 1 && shetavazeba=="კენტი"){
        console.log(num1)
    }
    else if(shetavazeba=="კვადრატი"){
        console.log(num1**2)
    }
    else if(num1 %3==0 && shetavazeba=="3 ჯერადი")
        console.log(num1)

    




num1++    
}