// complete the given function

function palindrome(str){

	str = str.replace(/ /g,"");
	 str = str.toLowerCase();
	
     let l=0, r= str.length-1;

  while(l<r){
    if(str.charAt(l)!=str.charAt(r)){
        return false;
    }
    l++;
    r--;
    
  }

  return true;
}
module.exports = palindrome
