# <!-- შექმენით კალკულატორი, მომხმარებელს შეეკითხეთ ორი რიცხვი, შემდეგ შეეკითხეთ რა მოქმედების შესრულება სურს ამ ორ რიცხვზე და მისი პასუხიდან გამომდინარე შეასრულეთ მოქმედება და დაბეჭდეთ მაგალითად თუ მომხმარებელი შემოიტანს რიცხვებს 5 და 7 , და შემოიტანს მოქმედებას მაგალითად დამატებას თქვენ უნდა დაუბეჭდოთ 5 + 7 = 12 -->


number = int(input("text a number: "))
number1 = int(input("text a number: "))
moqmedeba = input("sheiyvane ra ginda rom shesruldes: ")

if moqmedeba =="+":
    print(number + number1)
elif moqmedeba == "-":
    print(number - number1)
elif moqmedeba == "+":
    print(number * number1)
elif moqmedeba == "/":
    print(number / number1)