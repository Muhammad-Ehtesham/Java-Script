var numberArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,,17,18,19,20];
const even = [];
const odd = [];
for(i=0;i<numberArray.length;i++){
    if(numberArray[i]%2==0){
      even.push(numberArray[i]);
    }
    else{
       odd.push(numberArray[i]);
    }
}
document.write("<h1>ODD NUMBERS</h1><br>");
document.write(odd.join(" , "));
document.write("<br><h1>EVEN NUMBERS</h1><br>");
document.write(even.join(" , "));