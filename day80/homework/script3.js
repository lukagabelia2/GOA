// შექმენით სარეგისტრაციო ვებ-საიტი, რომელიც დიზაინის მხრივ მაქსიმალურად დახვეწავთ. მომხმარებელს Input ველებში შემოატანინეთ Email, Password და კიდევ ერთხელ გაამეორებინეთ Password, აუცილებლად დაამატეთ Submit ღილაკიც. გაიხსენეთ ფუნქცია, რომელიც გაკვეთილზე გავაკეთეთ და თქვენით დაამატეთ მსგავსი ფუნქციონალი თქვენს სარეგისტრაციო საიტზე. იმ შემთხვევაში თუ შეყვანილი პაროლი და გამეორებული პაროლი არ ემთხვევა ერთმანეთს alert box-ში გამოიტანეთ "Passwords do not match eachother. Try again.", თუ ორივე პაროლის შესაყვანი ველი ცარიელი იქნება გამოიტანეთ "Input fields cannot be empty.", ხოლო იმ შემთხვევაში თუ  შეყვანილი პაროლი და გამეორებული პაროლი ემთხვევა ერთმანეთს alert box-ში "Your login was successful" გამოიტანეთ;



function test(){
    const pas = document.getElementById("pass")
    const pas2 = document.getElementById("pass2")
    if(pas.value === pas2.value){
        console.log("Your login was successful")
        if(pas.value == "" && pas2.value ==""){
            console.log("carielia")
        }
    }
    else{
        console.log("Passwords do not match eachother. Try again.")
    }

    
    return false

}