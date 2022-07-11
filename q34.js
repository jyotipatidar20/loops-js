a=require("readline-sync")
var b=a.questionInt("inter the number")
rev=0
while (b>0){
    rev=(rev*10)+b%10
    b=Math.floor(b/10)
}
console.log(rev)
