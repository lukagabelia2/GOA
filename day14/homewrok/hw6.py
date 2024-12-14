# დაწერეთ ისეთი პროგრამა რომელიც მომხმარებელს უპრინტავს კვირის დღეს მომხმარებლის შემოტანილი რიცხვის მიხედვით (1 არის ორშაბათი, 2 სამშაბათი და ა.შ) გამოიყენეთ if elif else 
a = int(input("text a number: "))
if a == 1 or a ==8 or a ==15 or a==22 or a==29:
    print("kvira")
elif a ==2 or a ==9 or a ==16 or a == 23 or a==30:
    print("orshabati")
elif a==3 or a ==10 or a ==17 or a==24 or a==31:
    print("samshabati")
elif a==4 or a==11 or a==18 or a==25:
    print("otxshabati")
elif a==5 or a==12 or a ==19 or a==26:
    print("xutshabati")
elif a ==6 or a==13 or a==20 or a==27:
    print("paraskebi")
elif a ==7 or a==14 or a==21 or a==28:
    print("shabati")