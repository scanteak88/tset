/**
 * @param {number[]} nums
 * @return {number}
 */
// javascript 給定一個整數數組nums，找到總和最大的連續子數組（至少包含一個數字）並返回它的總和。子數組是數組的連續部分。
var maxSubArray = function(nums) {
    var Array = [];

    var res = (Array[0] = nums[0]);
    for (var i = 1; i < nums.length; ++i) {
        Array[i] = nums[i];
        if (Array[i - 1] > 0) {
            Array[i] += Array[i - 1];
        }
        res = Math.max(res, Array[i]);
    }
    return res;
};