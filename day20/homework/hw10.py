# დაითვალე დადებითი და უარყობითი რუცხვების ჯამი სიიდან
numbers = [1 , 15 , 23, -5 , 23 , -15 , -40 , 0]
positive = 0
negative = 0
for i in numbers:
    if i > 0 :
        positive += i
    else:
        negative +=i


print(positive)
print(negative)