/*
 *
 * 给定两个以升序排列的整形数组 nums1 和 nums2, 以及一个整数 k。
 * 
 * 定义一对值&nbsp;(u,v)，其中第一个元素来自&nbsp;nums1，第二个元素来自 nums2。
 * 
 * 找到和最小的 k 对数字&nbsp;(u1,v1), (u2,v2) ... (uk,vk)。
 * 
 * 示例 1:
 * 
 * 
 * 给出： nums1 = [1,7,11], nums2 = [2,4,6],  k = 3
 * 
 * 返回： [1,2],[1,4],[1,6]
 * 
 * 返回序列中的前 3 对数：
 * [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 给出：nums1 = [1,1,2], nums2 = [1,2,3],  k = 2
 * 
 * 返回： [1,1],[1,1]
 * 
 * 返回序列中的前 2 对数：
 * [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
 * 
 * 
 * 示例 3:
 * 
 * 
 * 给出：nums1 = [1,2], nums2 = [3],  k = 3 
 * 
 * 返回： [1,3],[2,3]
 * 
 * 也可能序列中所有的数对都被返回:
 * [1,3],[2,3]
 * 
 * 
 * 致谢:
 * 特别感谢&nbsp;@elmirap 和&nbsp;@StefanPochmann&nbsp;添加这个问题并创建所有的测试用例。
 * 
 *
 */