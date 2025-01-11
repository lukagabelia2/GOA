# შექმენით ფუნქცია რომელსაც გადაეცემა არგუმენტად რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ლუწია ეს რიცხვი თუ კენტი
num=int(int(input("text a number ")))
def luwia_ketia(number):
    if num %2==0:
        return "kentia"
    else:
        return "luwia"
print(luwia_ketia(num))