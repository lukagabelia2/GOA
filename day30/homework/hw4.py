# შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ეს რიცხვი დადებითია თუ უარყოფითი
num=int(input("text a name "))
def a(number):
    if number > 0:
        return "dadebitia"
    elif number ==0:
       return "0 tolia"
    else:
        return "uaryofitia"
print(a(num))