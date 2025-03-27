// )შექმენით სია სადაც იქნება user-ების სახელი და გვარი და ახალ სიაში დაამატეთ ამ იუსერების  ინიციალები სახელის და გვარის პირველი ასოები, მაგალითად: გიორგი ბიბილაშვილი -> გ.ბ
let sia=["luka gabelia"]
let idk=""
let namee=""
let surname=""
for(let i of sia){
    idk =i.split(" ")
    namee =idk[0][0]
    surname = idk[1][0]
}

console.log(namee+"."+surname)
