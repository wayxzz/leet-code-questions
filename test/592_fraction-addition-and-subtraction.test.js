/*
 *
 * 给定一个表示分数加减运算表达式的字符串，你需要返回一个字符串形式的计算结果。&nbsp;这个结果应该是不可约分的分数，即最简分数。&nbsp;如果最终结果是一个整数，例如&nbsp;2，你需要将它转换成分数形式，其分母为&nbsp;1。所以在上述例子中, 2&nbsp;应该被转换为&nbsp;2/1。
 * 
 * 示例&nbsp;1:
 * 
 * 
 * 输入:&quot;-1/2+1/2&quot;
 * 输出: &quot;0/1&quot;
 * 
 * 
 * &nbsp;示例 2:
 * 
 * 
 * 输入:&quot;-1/2+1/2+1/3&quot;
 * 输出: &quot;1/3&quot;
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入:&quot;1/3-1/2&quot;
 * 输出: &quot;-1/6&quot;
 * 
 * 
 * 示例 4:
 * 
 * 
 * 输入:&quot;5/3+1/3&quot;
 * 输出: &quot;2/1&quot;
 * 
 * 
 * 说明:
 * 
 * 
 * 	输入和输出字符串只包含&nbsp;&#39;0&#39; 到&nbsp;&#39;9&#39;&nbsp;的数字，以及&nbsp;&#39;/&#39;, &#39;+&#39; 和&nbsp;&#39;-&#39;。&nbsp;
 * 	输入和输出分数格式均为&nbsp;&plusmn;分子/分母。如果输入的第一个分数或者输出的分数是正数，则&nbsp;&#39;+&#39;&nbsp;会被省略掉。
 * 	输入只包含合法的最简分数，每个分数的分子与分母的范围是&nbsp;&nbsp;[1,10]。&nbsp;如果分母是1，意味着这个分数实际上是一个整数。
 * 	输入的分数个数范围是 [1,10]。
 * 	最终结果的分子与分母保证是 32 位整数范围内的有效整数。
 * 
 * 
 *
 */