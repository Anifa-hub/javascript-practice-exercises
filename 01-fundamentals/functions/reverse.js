function reverseNum(num) {
    let reverse = 0;
    while(num != 0)
    {
    reverse = reverse * 10;
    reverse = reverse + num%10;
    num = Math.trunc(num/10); 
    }
    return reverse;
    }
    
    console.log(reverseNum(123)) 
    console.log(reverseNum(5872)) 
    // or we can use the following ways
    let num = 123
    let num2 = num.toString().split('').reverse().join('')
    console.log(parseInt(num2))