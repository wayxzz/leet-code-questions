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


const findMedianSortedArrays = require("../questions/4_median-of-two-sorted-arrays");

describe('Median of Two Sorted Arrays', () => {

    test('if nums1 is [1, 3] and nums2 is [2], the result must be 2', () => {
        const nums1 = [1, 3];
        const nums2 = [2];
        const result = 2;

        expect(findMedianSortedArrays(nums1, nums2)).toBe(result);
    })

    test('if nums1 is [1, 2] and nums2 is [3, 4], the result must be 2.5', () => {
        const nums1 = [1, 2];
        const nums2 = [3, 4];
        const result = 2.5;

        expect(findMedianSortedArrays(nums1, nums2)).toBe(result);
    })
})
