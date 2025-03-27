// Prompით მომხმარებელს შემოატანინეთ მისი სახელი, გვარი, ასაკი და ჰობი, შემდეგ ეს ინფორმაცია შეინახეთ ობიექტში, ასევე ამ ობიექტს დაუმატეთ ფუნქცია, რომლის გამოძახებაზეც კონსოლში გამოიტანს "Welcome {name}"

let info ={
    kitxva: prompt("text a name,surname, age, hobi"),
    bolo(){
        return "helooo " + this.kitxva
    }
}

console.log(info.bolo())