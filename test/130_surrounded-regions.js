/*
 *
 * 给定一个二维的矩阵，包含&nbsp;&#39;X&#39;&nbsp;和&nbsp;&#39;O&#39;（字母 O）。
 * 
 * 找到所有被 &#39;X&#39; 围绕的区域，并将这些区域里所有的&nbsp;&#39;O&#39; 用 &#39;X&#39; 填充。
 * 
 * 示例:
 * 
 * X X X X
 * X O O X
 * X X O X
 * X O X X
 * 
 * 
 * 运行你的函数后，矩阵变为：
 * 
 * X X X X
 * X X X X
 * X X X X
 * X O X X
 * 
 * 
 * 解释:
 * 
 * 被围绕的区间不会存在于边界上，换句话说，任何边界上的&nbsp;&#39;O&#39;&nbsp;都不会被填充为&nbsp;&#39;X&#39;。 任何不在边界上，或不与边界上的&nbsp;&#39;O&#39;&nbsp;相连的&nbsp;&#39;O&#39;&nbsp;最终都会被填充为&nbsp;&#39;X&#39;。如果两个元素在水平或垂直方向相邻，则称它们是&ldquo;相连&rdquo;的。
 * 
 *
 */