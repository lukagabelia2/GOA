# შექმენით ცვლადები და დააჯამეთ ლუწი და კენტი რიცხვები სიიდან 
num = [1 , 2, 3, 4, 5, 6, 7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15]
odd = 0
even =0
for i in num:
    if  i % 2 ==0:
        even +=i
    else:
        odd +=i
print(odd)
print(even)