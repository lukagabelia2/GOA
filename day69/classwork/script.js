// მომხმარებელს შემოატანინეთ რიცხვი შემდეგ დაატრიალეთ ერთიდან ამ რიცხვამდე ციკლი, while ის დახმარებით და დაბეჭდეთ მხოლოდ 1 დან მომხმარებლის შემოტანილ რიცხვამდე 3ისჯერადი და 5ის ჯერადი რიცხვი, ისეთი რიცხვები რომლებიც სამის ჯერადიც არის და ხუთის ჯერადიც

let namee = Number(prompt("text a number"))
final = 1
while(final < namee){
    if(final %3==0 && final %5==0)
        console.log(final)

    final++
}