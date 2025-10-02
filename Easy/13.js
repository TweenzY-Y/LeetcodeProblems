const hash = new Map([["M",1000],["D", 500], ["C", 100], ["L", 50], ["X", 10], ["V", 5], ["I",1]]);

function romanToInt(s){
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const current = hash.get(s[i]);
    const next = hash.get(s[i+1]);
    if(!next || current >= next){
      result += current;
    }
    else{
      result += (next-current);
      i++;
    }
  }
  return result;
}
