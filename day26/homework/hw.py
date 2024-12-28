# შექმენით პროგრამა რომელიც გამოითვლის ჯგუფის საშუალო ასაკს. 
# ასევე გამოითვალეთ ყველაზე ხშირად რომელი ასაკი გვხვდება

group_age=[15,15,16,16,16,16,16,16,15,17,17,17,17,19,21,21,23,25,25,26,32]

print(sum(group_age)//len(group_age))


first_rank=group_age[0]

for i in group_age:
    if group_age.count(i)> group_age.count(first_rank):
        first_rank= i
        print(str(first_rank)+"meordeba"+str(group_age.count(first_rank)))

