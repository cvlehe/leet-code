function searchRange(nums: number[], target: number): number[] {
    let left = 0;
    let right = nums.length;
    let start = -1;
    let end = -1;

    while(left <= right) {
        if(start === -1) {
            if(nums[left] === target) {
                start = left;
            }else {
                left++;
            }
        }
        if(end === -1) {
            if(nums[right] === target) {
                end = right;
            }else {
                right--;
            }
        }
        if(start !== -1 && end !== -1) {
            return [left, right];
        }
    }
    return [start, end];
};