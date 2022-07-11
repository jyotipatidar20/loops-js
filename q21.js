n=require("readline-sync")
a=n.questionInt("inter the number")
i=40
sum=0
while(i>a){
    c=n.questionInt("inter the number")
    sum=sum+c
    i--
}
console.log(sum)