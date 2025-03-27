// შექმნილ ობიექტს გადაუარეთ for ციკლით და გამოიტანეთ key და value შემდეგი ფორმატით: "{key} is {value}"

let  info = {
    name : "luka"
}
for(let i in info){
    console.log(i+" is "+info[i])
}