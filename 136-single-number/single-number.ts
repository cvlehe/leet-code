function singleNumber(nums: number[]): number {
    const numsSorted = nums.sort();
    let i = 0;
    while (i < numsSorted.length) {
        if (i === numsSorted.length - 1 || numsSorted[i] !== numsSorted[i+1]) {
            return numsSorted[i];
        }else {
            i++;
        }
        i++;
    }
};