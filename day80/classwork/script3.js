// გააკეთეთ ისეთივე ფუნქციონალი Javascript-ის მეშვეობით რაც გაკვეთილზე გავაკეთეთ, თუმცა ამჯერად მომხმარებელს პირველი Input-ის ველში შემოატანინეთ სიტყვა. მეორე ინფუთის ველში კი თავიდან გაამეორებინეთ თავდაპირველად შემოტანილი სიტყვა. იმ შემთხვევაში თუ შემოტანილი ორი მნიშვნელობა არ ემთხვევა ერთმანეთს, console-ში გამოიტანეთ "The values should be equal and not blank". ხოლო თუ ემთხვევა - "The operation was successful".



function test(){
    const txt1 = document.getElementById("txt1")
    const txt2 = document.getElementById("txt2")
    if(txt1.value === txt2.value){
        console.log ("The operation was successful")
    }
    else{
        console.log ("The values should be equal and not blank")
    }

    return false
}

