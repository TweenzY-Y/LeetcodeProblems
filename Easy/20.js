function isValid(s) {
  const stack = [];
  const hash = new Map([[')','('],['}','{'], [']','[']]);
  for (let i = 0; i < s.length; i++) {
    const closing = hash.get(s[i]);
    if (!closing){
      stack.push(s[i]);
    }
    else if (stack.at(-1) !== closing){
      return false;
    }
    else{
      stack.pop();
    }
  }
  return stack.length === 0 ? true : false;
}
