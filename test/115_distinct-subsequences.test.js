/*
 *
 * 给定一个字符串&nbsp;S&nbsp;和一个字符串&nbsp;T，计算在 S 的子序列中 T 出现的个数。
 * 
 * 一个字符串的一个子序列是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，&quot;ACE&quot;&nbsp;是&nbsp;&quot;ABCDE&quot;&nbsp;的一个子序列，而&nbsp;&quot;AEC&quot;&nbsp;不是）
 * 
 * 示例&nbsp;1:
 * 
 * 输入: S = &quot;rabbbit&quot;, T = &quot;rabbit&quot;
 * 输出:&nbsp;3
 * 解释:
 * 
 * 如下图所示, 有 3 种可以从 S 中得到 &quot;rabbit&quot; 的方案。
 * (上箭头符号 ^ 表示选取的字母)
 * 
 * rabbbit
 * ^^^^ ^^
 * rabbbit
 * ^^ ^^^^
 * rabbbit
 * ^^^ ^^^
 * 
 * 
 * 示例&nbsp;2:
 * 
 * 输入: S = &quot;babgbag&quot;, T = &quot;bag&quot;
 * 输出:&nbsp;5
 * 解释:
 * 
 * 如下图所示, 有 5 种可以从 S 中得到 &quot;bag&quot; 的方案。 
 * (上箭头符号 ^ 表示选取的字母)
 * 
 * babgbag
 * ^^ ^
 * babgbag
 * ^^    ^
 * babgbag
 * ^    ^^
 * babgbag
 *   ^  ^^
 * babgbag
 *     ^^^
 * 
 *
 */