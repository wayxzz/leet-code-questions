/*
 *
 * 给定一个字符串&nbsp;s&nbsp;和一些长度相同的单词&nbsp;words。在 s 中找出可以恰好串联&nbsp;words&nbsp;中所有单词的子串的起始位置。
 * 
 * 注意子串要与&nbsp;words 中的单词完全匹配，中间不能有其他字符，但不需要考虑&nbsp;words&nbsp;中单词串联的顺序。
 * 
 * 示例 1:
 * 
 * 输入:
 *   s = &quot;barfoothefoobarman&quot;,
 *   words = [&quot;foo&quot;,&quot;bar&quot;]
 * 输出: [0,9]
 * 解释: 从索引 0 和 9 开始的子串分别是 &quot;barfoor&quot; 和 &quot;foobar&quot; 。
 * 输出的顺序不重要, [9,0] 也是有效答案。
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 *   s = &quot;wordgoodstudentgoodword&quot;,
 *   words = [&quot;word&quot;,&quot;student&quot;]
 * 输出: []
 * 
 * 
 *
 */