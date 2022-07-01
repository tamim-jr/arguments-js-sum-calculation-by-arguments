

function allNumbers(){
var num = 0;
for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];
    num = num + element;
}
return num;
}

var result = allNumbers(12, 45, 11, 3, 9, 15, 8);
console.log(result);

function newArgo(){
    var sum1 =0;
    for (let i = 0; i< arguments.length; i++) {
      const element = arguments[3];
       sum1 = sum1 + element;
    }
    return sum1;
}

var newResult = newArgo(2, 4, 6, 8, 3, 5);
console.log(newResult);