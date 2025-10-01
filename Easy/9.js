function isPalindrome(x){
  if (x < 0) return false;
  let num = x;
  let reversed = 0;
  while (num !== 0) {
    reversed = reversed * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  return x === reversed;
}
