import random
all_group=[]
squad=[]

goa_group50_students=["ცხადაძე","სოფია","ხუიშვილი","ჯანხოთელი","ბაღათურია","ბოკუჩავა","ანა","გლოველი","ბექა ბერაშვილი","გიო სამსონიძე","გოგა","დაჩი გიორგაძე","კესარია ჩაჩუა","ლუკა მერუმოვი","ნიკა აბულაძე","ალეკო"]

while goa_group50_students!=[]:
    if len(goa_group50_students) <3:
        break
    else:
        for i in range(3):
            random_student = random.choice(goa_group50_students)
            squad.append(random_student)
            goa_group50_students.remove(random_student)
        all_group.append(squad)
        squad=[]

        print(all_group)