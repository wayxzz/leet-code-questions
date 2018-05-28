/*
 *
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2 。
 * 
 * 请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log (m+n)) 。
 * 
 * 示例 1:
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * 中位数是 2.0
 * 
 * 
 * 示例 2:
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * 中位数是 (2 + 3)/2 = 2.5
 * 
 * 
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // merge and find median
    let num = [];
    let index1 = 0;
    let index2 = 0;
    while (index1 < nums1.length && index2 < nums2.length) {
        if (nums1[index1] < nums2[index2]) {
            num.push(nums1[index1++]);
        } else {
            num.push(nums2[index2++]);
        }
    }
    if (index1 < nums1.length) {
        num = num.concat(nums1.slice(index1));
    }
    if (index2 < nums2.length) {
        num = num.concat(nums2.slice(index2));
    }
    let length = num.length;
    if (length % 2 === 1) {
        return num[parseInt((length - 1) / 2)];
    } else {
        return (num[parseInt((length - 1) / 2)] + num[parseInt((length) / 2)]) / 2;
    }
};

module.exports = findMedianSortedArrays;
