/*
 *
 * 如果一个矩阵的每一方向由左上到右下的对角线上具有相同元素，那么这个矩阵是托普利茨矩阵。
 * 
 * 给定一个&nbsp;M x N&nbsp;的矩阵，当且仅当它是托普利茨矩阵时返回&nbsp;True。
 * 
 * 示例&nbsp;1:
 * 
 * 
 * 输入: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
 * 输出: True
 * 解释:
 * 1234
 * 5123
 * 9512
 * 
 * 在上面这个矩阵中, 对角线分别是 &quot;[9]&quot;, &quot;[5, 5]&quot;, &quot;[1, 1, 1]&quot;, &quot;[2, 2, 2]&quot;, &quot;[3, 3]&quot;, &quot;[4]&quot;, 各条对角线上的所有元素都相同, 因此答案是True。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: matrix = [[1,2],[2,2]]
 * 输出: False
 * 解释: 
 * 对角线, 比如: &quot;[1, 2]&quot; 上有不同的元素。
 * 
 * 
 * 注意:
 * 
 * 
 * 	&nbsp;matrix&nbsp;(矩阵)是一个包含整数的二维数组。
 * 	matrix&nbsp;的行数和列数均在&nbsp;[1, 20]范围内。
 * 	matrix[i][j]&nbsp;包含的整数在&nbsp;[0, 99]范围内。
 * 
 * 
 *
 */