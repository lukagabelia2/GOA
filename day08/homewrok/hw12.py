# შეამოწმე, არის თუ არა მომხმარებლის შემოტანილი ორი რიცხვი ერთმანეთზე მეტი და 10-ის ჯერადი
num =int(input("text a number: "))
num1 =int(input("text a number: "))
result= num +num1
if num +num1>=result and result % 10 ==0:
    print("true")
else:
    print("false")