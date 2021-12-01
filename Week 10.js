{randomArray = (length, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * max));
}
function sumArray(){
var results = document.getElementById("results");
var sum = 0;
for(var i = 0; i < randomArray.length; i++){
sum+=randomArray[i];
}
results.innerHTML="The sum answer is: " + sum;
}
function meanArray(){
var results = document.getElementById("results");
var sum = 0;
for(var i = 0; i < randomArray.length; i++){
sum+=randomArray[i];
}
var mean = sum / randomArray.length;
results.innerHTML="The mean answer is: " + mean;
}