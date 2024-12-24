# შექმენით 3 ცრილი სამივე იქნება განსხვავებული მონაცემთა ტიპიები  | ბოლეანი არა საჭირო | და შექმენით ცარიელი ცხრილი სადაც იქნება დასაწყისში ინტეჯერების ცხრილი  სტრინგების ცხრილი და მერე ფლოათების ცხრილი
a = ["luka" , "saba" , "nika"]
b = [2 , 3 ,5]
c = [12.3   , 23.4]
d=[]

for i in b:
    if type(i) == int:
        d.append(i)
print(d)

for i in a:
    if type(i) == str:
        d.append(i)
print(d)

for i in c:
    if type(i) == float:
        d.append(i)
print(d)