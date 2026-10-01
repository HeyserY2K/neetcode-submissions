class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // create an empty object
        let groupS = {};
        for (let str in strs) {
            // create a key by sorting the characters
            let key = strs[str].split("").sort().join("");
            // console.log("key", key);
            // console.log("strs[str]", strs[str]);
            // if the key doesn't exist yet
            if (!groupS[key]) {
                //create an empty array
                groupS[key] = [];
            }
            // add group string in to created object
            groupS[key].push(strs[str]);
        }
        // return all the grouped string
        return Object.values(groupS);
    }
}
