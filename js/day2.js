function giveMeSomething(str){
 return ( 'something '+str);
//  return (`something ${str}`);
   //  return 'something'.concat( ' ' ,str);
}
 console.log( giveMeSomething("is better than nothing") );
 console.log( giveMeSomething("Bob Jane"));
 console.log( giveMeSomething("something") );

function triArea(base,height){
   return (base * height) / 2;
}

// `Area of a Triangle`
 console.log( triArea(3, 2));
 console.log( triArea(7, 4) );
 console.log( triArea(10, 10) );

function howManySeconds(hour){
     return 3600 * hour
}

  console.log(howManySeconds(2));
  console.log(howManySeconds(10));
  console.log(howManySeconds(24));
 
 function getFirstValue(arr){
    // return arr.shift()
    return arr[0]
 }
 console.log(getFirstValue([1, 2, 3]))
 console.log(getFirstValue([80, 5, 100]))
 console.log(getFirstValue([-500, 0, 50]))

function nextEdge(num1,num2){
    return Number(num1) + Number(num2)-1
   //  return (num1-1) + (num2-1) + 2 -1
   //  return (num1*1) + (num2*1) -1
   //  return parseInt(num1) + parseInt(num2)-1
   //  return parseFloat(num1) + parseFloat(num2)-1
   //  return (num1/1) + (num2/1) -1
   //  return +(num1) + +(num2) -1
}

 console.log(nextEdge(8, 10) )
 console.log(nextEdge(5, 7) )
 console.log(nextEdge(9, 2) )

 function findPerimeter(num1,num2){
    return 2 * (Number(num1) + Number(num2)) ;
    
 }
 console.log(findPerimeter(6, 7))
 console.log(findPerimeter(20, 10))
 console.log(findPerimeter(2, 9))

function remainder(num1,num2){
   return num1 % num2
}
 console.log(remainder(1, 3))
 console.log(remainder(3, 4))
 console.log(remainder(-9, 45))
 console.log(remainder(5, 5))