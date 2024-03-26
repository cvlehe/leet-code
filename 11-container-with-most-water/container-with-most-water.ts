function maxArea(height: number[]): number {
    if(!height.length) return 0;
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while(left < right){
        let area = Math.min(height[left], height[right]) * (right - left);
        if (area > max) max = area;
        if(height[left] <= height[right]) left++;
        else if(height[left] > height[right]) right--;
    }

    return max;
};