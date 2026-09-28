class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // double loop to find the correct combination and return indexes
        let sum;
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (i != j) {
                    sum = nums[i] + nums[j];
                    if (sum === target) {
                        return [i, j];
                    }
                }
            }
        }
    }
}
