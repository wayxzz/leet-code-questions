/*
 *
 * 给定一个二进制矩阵&nbsp;A，我们想先水平翻转图像，然后反转图像并返回结果。
 * 
 * 水平翻转图片就是将图片的每一行都进行翻转，即逆序。例如，水平翻转&nbsp;[1, 1, 0]&nbsp;的结果是&nbsp;[0, 1, 1]。
 * 
 * 反转图片的意思是图片中的&nbsp;0&nbsp;全部被&nbsp;1&nbsp;替换，&nbsp;1&nbsp;全部被&nbsp;0&nbsp;替换。例如，反转&nbsp;[0, 1, 1]&nbsp;的结果是&nbsp;[1, 0, 0]。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [[1,1,0],[1,0,1],[0,0,0]]
 * 输出: [[1,0,0],[0,1,0],[1,1,1]]
 * 解释: 首先翻转每一行: [[0,1,1],[1,0,1],[0,0,0]]；
 *      然后反转图片: [[1,0,0],[0,1,0],[1,1,1]]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
 * 输出: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
 * 解释: 首先翻转每一行: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]]；
 *      然后反转图片: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
 * 
 * 
 * 说明:
 * 
 * 
 * 	1 &lt;= A.length = A[0].length &lt;= 20
 * 	0 &lt;= A[i][j]&nbsp;&lt;=&nbsp;1
 * 
 * 
 *
 */