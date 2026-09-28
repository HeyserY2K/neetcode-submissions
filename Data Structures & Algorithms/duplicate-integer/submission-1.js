class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            //Important i + 1 to not repeat numbers already checked
            for (let j = i + 1; j < nums.length; j++) {
                //Use same array just different index
                if (nums[i] === nums[j]) {
                    return true;
                }
            }
        }
        return false;
    }
}
