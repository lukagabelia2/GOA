# შექმენით ერთი სია რომელშიც შეიტანთ სახელებს შემდეგ შექმენით მეორე სია რომელშიც იქნება ისევ სხვადასხვა სახელები გააერთიანეთ ეს ორი სია ჩაამატეთ 5 ინდექსზე ახალი სახელი დაითვალეთ გაერთიანებული სიის სიგრძე და დაითვალეთ თქვენი სახელი რამდენჯერ გვხვდება ამ სიაში, ასევე დაბეჭდეთ რომელ ინდექსზე დგას თქვენი სახელი 

a=["luka", "nika", "saba"]
b=["kaxa", "gio", "nika"]

a.extend(b)
print(a)

a.insert(6 , "idk")
a.insert(7 , "gocha")
a.insert(8, "daviti")
a.insert(9, "mate")
a.insert(10, "nodari")
print(a)

print(len(a))



print(a.count("luka"))
print(a.index("luka"))