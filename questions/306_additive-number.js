/*
 *
 * 累加数是一个字符串，组成它的数字可以形成累加序列。
 * 
 * 一个有效的累加序列必须至少包含 3 个数。除了最开始的两个数以外，字符串中的其他数都等于它之前两个数相加的和。
 * 
 * 给定一个只包含数字&nbsp;&#39;0&#39;-&#39;9&#39;&nbsp;的字符串，编写一个算法来判断给定输入是否是累加数。
 * 
 * 说明:&nbsp;累加序列里的数不会以 0 开头，所以不会出现&nbsp;1, 2, 03 或者&nbsp;1, 02, 3&nbsp;的情况。
 * 
 * 示例 1:
 * 
 * 输入: &quot;112358&quot;
 * 输出: true 
 * 解释: 累加序列为: 1, 1, 2, 3, 5, 8 。1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
 * 
 * 
 * 示例&nbsp;2:
 * 
 * 输入: &quot;199100199&quot;
 * 输出: true 
 * 解释: 累加序列为: 1, 99, 100, 199。1 + 99 = 100, 99 + 100 = 199
 * 
 * 进阶:
 * 你如何处理一个溢出的过大的整数输入?
 * 
 *
 */