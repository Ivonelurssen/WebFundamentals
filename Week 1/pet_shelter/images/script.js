function hide(element){
    element.remove();
}

var a = document.getElementById('dropdown');
a.addEventListener('change',function(){
var b = document.querySelectorAll('option:checked');
for(var i = 0; i < b.length; i++){
if(b[i].value == 1){
alert('You are looking for: Any Pet')
}
else if(b[i].value == 2 ){
alert('You are looking for a: Cat')
}
else{
alert('You are looking for a: Dog')
}
}
});

var count1 = 3
var countElement1 = document.querySelector('.petting1')

function add1(){
    count1++;
    countElement1.innerText = count1 + " petting(s)";
}

var count2 = 5
var countElement2 = document.querySelector('.petting2')

function add2(){
    count2++;
    countElement2.innerText = count2 + " petting(s)";
}

var count3 = 8
var countElement3 = document.querySelector('.petting3')

function add3(){
    count3++;
    countElement3.innerText = count3 + " petting(s)";
}