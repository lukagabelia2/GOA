# განუწყვეტლივ სთხოვეთ მომხმარებელს მისი სახელი, სანამ არ შეიყვანს "quit"-ს.

a=input("text a name: ")
i=1
while i >0:
    i+=1
    if a =="quit":
        print("brao")
        break
    else:
       a=input("text a name: ")