/*
 *
 * 给定一个未排序的数组，请判断这个数组中是否存在长度为3的递增的子序列。
 * 
 * 正式的数学表达如下:
 * 
 * 如果存在这样的&nbsp;i, j, k,&nbsp;&nbsp;且满足&nbsp;0 &le; i &lt; j &lt; k &le; n-1，
 * 使得&nbsp;arr[i] &lt; arr[j] &lt; arr[k] ，返回 true ;&nbsp;否则返回 false 。
 * 
 * 要求算法时间复杂度为O(n)，空间复杂度为O(1) 。
 * 
 * 示例:
 * 输入&nbsp;[1, 2, 3, 4, 5],
 * 输出&nbsp;true.
 * 
 * 输入&nbsp;[5, 4, 3, 2, 1],
 * 输出&nbsp;false.
 * 
 * 致谢:
 * 特别感谢&nbsp;@DjangoUnchained&nbsp;添加这道题并创建所有测试用例。
 * 
 *
 */