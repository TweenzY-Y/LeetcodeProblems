function twoSum(nums,target){
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];
    if (hash.has(needed)){
      return [i,hash.get(needed)];
    }
    else{
      hash.set(nums[i],i);
    }
    
  }
}

twoSum([3,2,4], 6);
