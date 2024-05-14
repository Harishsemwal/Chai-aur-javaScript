// Palindrom string

var isPalindrome = (str) =>{
    let revStr = "";
    let n = str.length;
    for(let i = n - 1; i >= 0; i--){
        revStr += str[i];
    }
    console.log(revStr);
    if(str == revStr){
        return true;
    }
    return false;
}

var str = "Harish";
var bool = isPalindrome(str);
if(bool){
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome");
}