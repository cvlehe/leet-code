function majorityElement(nums: number[]): number {
    let majority: number;
    const counts: {[key: string]: number} = {};
    for (var i = 0; i < nums.length; i++) {
        const current = nums[i];
        if(!majority) {
            majority = current;
        }
        const count = (counts[current] || 0) + 1;
        if (count > counts[majority]) {
            majority = current;
        }
        counts[current] = count;
    }
    return majority;
};