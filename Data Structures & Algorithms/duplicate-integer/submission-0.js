class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            let numsFiltered = nums.filter(x => x == nums[i])
            if (numsFiltered.length >= 2) {
                return true;
            }
        }

        return false
    }
}
