function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (var i = 0; i < nums.length; i++) {
        const current = nums[i];
        const diff = target - current;
        const diffIndex = map.get(diff);
        console.log(diffIndex);
        if(diffIndex !== undefined) {
            return [i, diffIndex];
        }else {
            map.set(current, i);
        }
    }
};