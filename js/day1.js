    function addition(num1,num2){
        return Number(num1) + Number(num2);
        return parseInt(num1) + parseInt(num2);
        return +(num1) + +(num2);
        return (1*num1) + (1*num2);
        return (num1 /1) + (num2 /1);
        return (num1-1) + (num2-1) + 2;;
    }
    
   console.log( addition(3, 2));
   console.log( addition(-3, -6) );
   console.log( addition(7, 3) );
   console.log( addition('7', '3') );
   console.log( addition('7', 3) );
// 5*x=300 => x=300/5 = 60;
// 5+x = 300 => x = 300-5;
// x/5=300 => x =  5*300 ;
function convert(num){
    // return num * 60;
    return 60 * num;
}

console.log( convert(5));
console.log( convert(3));
console.log( convert(2));
console.log( convert('2'));
function addition1(num){
    return  1 + Number(num);
    return  1 + (1*num);
    return 1 + (num/1);
    return 1 + (num-1)+1;
    return 1+ (+num);
    return 1+ parseInt(num);
}
console.log(addition1(0));
console.log(addition1('9') );
console.log(addition1('-3') );