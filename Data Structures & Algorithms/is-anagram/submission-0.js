class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // split arrays to work in arrays
        // sort the arrays and join them
        // compare to see if they are the same
        s = s.split('').sort().join()
        t = t.split('').sort().join()
        return (s === t)
    }
}
