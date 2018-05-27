/*
 *
 * 如果我们交换字符串&nbsp;X 中的两个不同位置的字母，使得它和字符串&nbsp;Y 相等，那么称 X 和 Y 两个字符串相似。
 * 
 * 例如，&quot;tars&quot; 和 &quot;rats&quot; 是相似的 (交换 0 与 2 的位置)；&nbsp;&quot;rats&quot; 和 &quot;arts&quot; 也是相似的，但是 &quot;star&quot; 不与 &quot;tars&quot;，&quot;rats&quot;，或 &quot;arts&quot; 相似。
 * 
 * 总之，它们通过相似性形成了两个关联组：{&quot;tars&quot;, &quot;rats&quot;, &quot;arts&quot;} 和 {&quot;star&quot;}。注意，&quot;tars&quot; 和 &quot;arts&quot; 是在同一组中，即使它们并不相似。形式上，对每个组而言，要确定一个单词在组中，只需要这个词和该组中至少一个单词相似。
 * 
 * 我们给出了一个不包含重复的字符串列表 A。列表中的每个字符串都是 A 中其它所有字符串的一个字母异位词。请问 A 中有多少个相似字符串组？
 * 
 * 示例：
 * 
 * 输入：[&quot;tars&quot;,&quot;rats&quot;,&quot;arts&quot;,&quot;star&quot;]
 * 输出：2
 * 
 * 提示：
 * 
 * 
 * 	A.length &lt;= 2000
 * 	A[i].length &lt;= 1000
 * 	A.length * A[i].length &lt;= 20000
 * 	A 中的所有单词都只包含小写字母。
 * 	A 中的所有单词都具有相同的长度，且是彼此的字谜。
 * 	此问题的判断限制时间已经延长。
 * 
 * 
 * 备注：
 * 
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 字母异位词[anagram]，一种把某个字符串的字母的位置（顺序）加以改换所形成的新词。
 * 
 *
 */