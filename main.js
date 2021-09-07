guestlist=[];
studentjk=[];
function submit(){
 var a= document.getElementById("jk").value;
 guestlist.push(a);
document.getElementById("bo").innerHTML=guestlist;
console.log(guestlist);
}
function hi(){
guestlist.sort();
document.getElementById("fg").innerHTML=guestlist;
console.log(guestlist);
}
function dh(){
for (var p=0;p>10;p++){
    studentjk.push("<h4>name:"+guestlist[p]+"</h4>");
    document.getElementById("nj").innerHTML=studentjk;
    console.log(studentjk);
}
}