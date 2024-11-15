
let num=123;

const newNumber=num.toString().split('')
let reverse=[];
for(let i=newNumber.length-1;i>=0;i--){ // 3-1=2  2>=0 true , 2--=1,  1>=0 true  ,1--=0 , 0>=0 true , 0--=-1 -1>=0 false exit
    reverse.push(newNumber[i]);
}
console.log (Number(reverse.join('')))

//const arr=[1,2,3,4]
//console.log = ((arr[3],arr[2],arr[1],arr[0]).);



