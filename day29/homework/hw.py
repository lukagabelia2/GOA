#  python - შექმენით რიცხვებით სავსე სია შემდეგ კი შექმენით პროგრამა რომელიც დაგვიბეჭდავს ამ სიიდან უდიდესს, გაიხსენეთ ბატონი ნიკას მოცემული დავალება გამოგადგებათ
a=[1,2,4,5,74,65,34]
firs_rank=a[0]
for i in a:
    if i > firs_rank:
        firs_rank=i
print(firs_rank)