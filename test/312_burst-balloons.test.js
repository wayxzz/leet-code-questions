/*
 *
 * 有 n 个气球，编号为0 到 n-1，每个气球上都标有一个数字，这些数字存在数组&nbsp;nums&nbsp;中。
 * 
 * 现在要求你戳破所有的气球。每当你戳破一个气球 i 时，你可以获得&nbsp;nums[left] * nums[i] * nums[right]&nbsp;个硬币。&nbsp;这里的&nbsp;left&nbsp;和&nbsp;right&nbsp;代表和&nbsp;i&nbsp;相邻的两个气球的序号。注意当你戳破了气球 i 后，气球&nbsp;left&nbsp;和气球&nbsp;right&nbsp;就变成了相邻的气球。
 * 
 * 求所能获得硬币的最大数量。
 * 
 * 说明:
 * 
 * 
 * 	你可以假设&nbsp;nums[-1] = nums[n] = 1，但注意它们不是真实存在的所以并不能被戳破。
 * 	0 &le; n &le; 500, 0 &le; nums[i] &le; 100
 * 
 * 
 * 示例:
 * 
 * 输入: [3,1,5,8]
 * 输出: 167 
 * 解释: nums = [3,1,5,8] --&gt; [3,5,8] --&gt;   [3,8]   --&gt;  [8]  --&gt; []
 * &nbsp;    coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
 * 
 * 
 *
 */