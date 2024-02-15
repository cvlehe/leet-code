function removeDuplicates(nums: number[]): number {
    let i = 0;
    const values: {[id: string]: boolean} = {}

    while(i < nums.length) {
        const current = `${nums[i]}`;
        if(values[current]) {
            nums.splice(i, 1)
        }else {
            values[current] = true;
            i++;
        }

    }
    return nums.length;
};