/*
 *
 * 给定两个字符串s1, s2，找到使两个字符串相等所需删除字符的ASCII值的最小和。
 * 
 * 示例 1:
 * 
 * 
 * 输入: s1 = &quot;sea&quot;, s2 = &quot;eat&quot;
 * 输出: 231
 * 解释: 在 &quot;sea&quot; 中删除 &quot;s&quot; 并将 &quot;s&quot; 的值(115)加入总和。
 * 在 &quot;eat&quot; 中删除 &quot;t&quot; 并将 116 加入总和。
 * 结束时，两个字符串相等，115 + 116 = 231 就是符合条件的最小和。
 * 
 * 
 * 示例&nbsp;2:
 * 
 * 
 * 输入: s1 = &quot;delete&quot;, s2 = &quot;leet&quot;
 * 输出: 403
 * 解释: 在 &quot;delete&quot; 中删除 &quot;dee&quot; 字符串变成 &quot;let&quot;，
 * 将 100[d]+101[e]+101[e] 加入总和。在 &quot;leet&quot; 中删除 &quot;e&quot; 将 101[e] 加入总和。
 * 结束时，两个字符串都等于 &quot;let&quot;，结果即为 100+101+101+101 = 403 。
 * 如果改为将两个字符串转换为 &quot;lee&quot; 或 &quot;eet&quot;，我们会得到 433 或 417 的结果，比答案更大。
 * 
 * 
 * 注意:
 * 
 * 
 * 	0 &lt; s1.length, s2.length &lt;= 1000。
 * 	所有字符串中的字符ASCII值在[97, 122]之间。
 * 
 * 
 *
 */