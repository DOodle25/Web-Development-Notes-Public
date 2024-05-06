var i = 0;
function countNumbers(){
    if(i < 100000){
        i = i + 1;
        postMessage(i);
    }
 
    // Wait for sometime before running this script again
    setTimeout("countNumbers()", 5000);
}
countNumbers();


