 function forLoop (array){
   for (let i=0; i<25; i++) {
     if (i === 1) {
array.push(`I am ${i} strange loop.`)
 }  else {
array.push(`I am ${i} strange loops.`)
  }
 }
 return array
 }

function whileLoop (n){
let countdown = n;
while(countdown>0) {
  console.log(--countdown);
}
return(`done`)
}

function incrementVariable(num){
  var i = 0;
  return num;
}
  
function doWhileLoop(num){
  do{
    console.log("I run once regardless.")
  } while (incrementVariable()<num);
  }

function doWhileLoop(num) {
  var i = 0;
    
 function incrementVariable() {
        i = i + 1;
        return i;
  }
  
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < num);

}