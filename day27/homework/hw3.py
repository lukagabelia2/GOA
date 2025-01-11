#  მომხმარებელს შემოატანინეთ ორი რიცხვი ხოლო ამის შემდეგ for loop - ის გამოყენებით გამოიტანეთ ამ რიცხვებს შორის ჯამი და ნამრავლი.
a=int(input("text a number: "))
b=int(input("text a numebr: "))

jami=0
namravli=1



for i in range(a,b):
    jami=jami+i
    namravli=namravli*i
    finish=namravli,jami
print(finish)