function longestCommonPrefix(strs){
  const root = {children: {}, isEnd: false};
  for (let i = 0; i < strs.length; i++) {
    let curr = root;
    for (let j = 0; j < strs[i].length; j++) {
      let char = strs[i][j];
      if(!(char in curr.children)){
        curr.children[char] = {children: {}, isEnd: false};
      }
      curr = curr.children[char];
    }
    curr.isEnd = true;
  }
  let prefix = "";
  let node = root;

  while (true) {
    const keys = Object.keys(node.children);
    if (keys.length !== 1 || node.isEnd) break;
    prefix += keys[0];
    node = node.children[keys[0]];
  }

  return prefix;
}
