a=require("readline-sync")
var num=a.questionInt("enter the number")
var b=num
var c=a.questionInt("enter the number")
i=0
sum=0
while (num>0){
    a=num%10
    i=a**c
    sum=sum+i
    num=Math.floor(num/10)
}
if (sum==b){
    console.log("armstrong")
}
else{
    console.log("not armstrong")
}





