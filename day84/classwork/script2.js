// 2)შექმენით 4 div-კონტეინერი,თითოეულ დივს მიეცით id , თუ რა ფერი უნდა გახდეს ეს დივი დაკლიკების შემდეგ,ასევე ამ დივში უნდა იყოს პარაგრაფი(Click to see color), შემდეგ javaascript-იდან შეამოწმეთ რომელ DIV-ზე განხორციელდა მოვლენა , ასევე შეამოწმეთ ამ DIV- ის ID-ები და მიანიჭეთ შესაბამისი ფერი ,  ასევე შეცვალეთ paragraph-ის textContent იმ ფერის სახელით რა ფერითაც შეიცვლება დივი

document.addEventListener("click" , function(event){
    let id = event.target.id
    event.target.style.color = id
    event.target.innerText = "this is new words"
})