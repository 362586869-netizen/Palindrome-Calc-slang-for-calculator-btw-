const input = document.getElementById("input");
const answer = document.getElementById("answer");
const pal = document.getElementById("pal");
const button = document.getElementById("button");

let ans = "";
// Function to begin the palindroming
function begin(inpVal){
  let inLen = inpVal.length;
  let inTop = inLen-1;
  //select back letter and put at front
  for(i=1; i<inLen+1; i++){
    let numOn = inLen-i;
    ans = ans + inpVal[numOn];
  }
  answer.innerHTML= ans;
  //check if palindrome
  if(ans==inpVal){
    pal.innerHTML="Palindrome: ✅";
  }else{
    pal.innerHTML="Palindrome: ❌";
  }
  ans = "";
}
//Enter key pressed
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        begin(this.value);
    }
});
//Button clicked
button.onclick=function(){
  begin(input.value);
}