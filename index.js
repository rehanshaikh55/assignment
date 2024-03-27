function removeDuplicates(nums) {
    if (nums.length === 0) 
     return 0; 
    
    let unique = 0; 
    
    for (let i = 1; i < nums.length; i++) {
        
        if (nums[i] !== nums[unique]) {
            unique++; 
            nums[unique] = nums[i]; 
        }
    }
   
    for (let i = unique+ 1; i < nums.length; i++) {
        nums[i] = '_';
    }
    
    return unique+ 1;
} 

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let length = removeDuplicates(nums); 
console.log(nums);
console.log(length);
