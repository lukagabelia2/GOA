# დაწერეთ ალგორითმი, რომელიც მომხმარებელს შეეკითხება რიცხვს. თუ რიცხვი ლუწია გაყავით ორზე, სხვა შემთხვევაში გაამრავლეთ სამზე და მიუმატეთ ერთი.
a=int(input("text a number: "))

if a % 2 ==0:
    print(a // 2)
else:
    print(a *3 +1)