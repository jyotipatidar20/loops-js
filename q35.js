a=require("readline-sync")
var b=a.questionInt("inter the number")
var c=0
var d=1
var e=1
while(e<=b){
    console.log(e)
    c=d
    d=e
    e=c+d
}