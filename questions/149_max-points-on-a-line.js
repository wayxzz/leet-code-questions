/*
 *
 * 给定一个二维平面，平面上有&nbsp;n&nbsp;个点，求最多有多少个点在同一条直线上。
 * 
 * 示例 1:
 * 
 * 输入: [[1,1],[2,2],[3,3]]
 * 输出: 3
 * 解释:
 * ^
 * |
 * | &nbsp; &nbsp; &nbsp; &nbsp;o
 * | &nbsp; &nbsp; o
 * | &nbsp;o &nbsp;
 * +-------------&gt;
 * 0 &nbsp;1 &nbsp;2 &nbsp;3  4
 * 
 * 
 * 示例&nbsp;2:
 * 
 * 输入: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
 * 输出: 4
 * 解释:
 * ^
 * |
 * |  o
 * | &nbsp;&nbsp;&nbsp;&nbsp;o&nbsp;&nbsp;      o
 * | &nbsp;&nbsp;&nbsp;&nbsp;   o
 * | &nbsp;o &nbsp;      o
 * +-------------------&gt;
 * 0 &nbsp;1 &nbsp;2 &nbsp;3 &nbsp;4 &nbsp;5 &nbsp;6
 * 
 *
 */