
let num=123;

const newNumber=num.toString().split('')
let reverse=[];
for(let i=newNumber.length-1;i>=0;i--){ // 3-1=2  2>=0 true , 2--=1,  1>=0 true  ,1--=0 , 0>=0 true , 0--=-1 -1>=0 false exit
    reverse.push(newNumber[i]);
}
console.log (Number(reverse.join('')))





