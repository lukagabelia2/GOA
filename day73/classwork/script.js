// შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა სია შემდეგ კი დაბეჭდეთ ამ სიის ჯამი

function sia(num){
    sum=0
    for(let i of num){
        sum+=i
    }
    return sum
}

console.log(sia([1,2,3,4,5]))

