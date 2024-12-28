# შექმენით ფუნქცია რომელშიც იქნება რიცხვებით სავსე სია ხოლო ფუნქცია დააბრუნებს ამ სიის ელემენტების ჯამს


def a():
    num=[1,2,3,4,5,6,7,8]
    finish = 0
    for i in range((len(num))):
        finish +=i
    return( finish)
print(a())