let numbers = [77,88,95,68];
let sum = 0;
for (let i=0; i<numbers.length; i++){
   sum += numbers[i] 
}
let average = sum / numbers.length
console.log(average)
if (average <60){
    console.log('F')
} else if (average<70){
    console.log('D')
} else if (average<80){
    console.log('C')
} else if (average<90){ 
    console.log('B')
}else if (average<100){
    console.log('A')
} else {
    console.log('Non')
}