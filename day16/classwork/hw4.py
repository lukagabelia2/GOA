#  ერთიდან 100 მდე დაბეჭდეთ ყველა რიცხვი თან გვერძე მიუწერეთ ლუწია თუ კენტი  while loop ის გამოყენებით 
num = 0
while num <100:
    num+=1
    if num % 2 ==0:
         print(str(num) + "კენტია")
    else:
         print(str(num)+"ლუწი")