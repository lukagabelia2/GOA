// for-ციკლის გამოყენებით იპოვეთ სიაში ყველაზე დიდი და ყველაზე პატარა რიცხვები

let sia = [0,1,2,4,5,6,7,8,9,12,14,15,1423]

let magali=sia[0]
let dabali=sia[0]
for(i = 1;i<sia.length;i++){
    if(sia[i]>magali)
        magali= sia[i]
}   if(sia[i]<dabali){
        dabali= sia[i]
}
console.log(magali,dabali)