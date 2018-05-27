/*
 *
 * 如果一个字符在字符串&nbsp;S&nbsp;中有且仅有出现一次，那么我们称其为独特字符。
 * 
 * 例如，在字符串&nbsp;S = &quot;LETTER&quot;&nbsp;中，&quot;L&quot;&nbsp;和&nbsp;&quot;R&quot;&nbsp;可以被称为独特字符。
 * 
 * 我们再定义&nbsp;UNIQ(S)&nbsp;作为字符串&nbsp;S&nbsp;中独特字符的个数。
 * 
 * 那么，在&nbsp;S = &quot;LETTER&quot;&nbsp;中，&nbsp;UNIQ(&quot;LETTER&quot;) =&nbsp; 2。
 * 
 * 对于给定字符串&nbsp;S，计算其所有非空子串的独特字符的个数，即&nbsp;UNIQ(substring)。
 * 
 * 如果出现两个或者多个相同的子串，将其认为是不同的两个子串。
 * 
 * 考虑到答案可能会非常大，规定返回格式为：结果 mod&nbsp;10 ^ 9 + 7。
 * 
 * 示例 1:
 * 
 * 
 * 输入: &quot;ABC&quot;
 * 输出: 10
 * 解释: 所有可能的子串为：&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;AB&quot;,&quot;BC&quot; 和 &quot;ABC&quot;。
 *      其中，每一个子串都由独特字符构成。
 *      所以其长度总和为：1 + 1 + 1 + 2 + 2 + 3 = 10
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: &quot;ABA&quot;
 * 输出: 8
 * 解释: 除了子串 UNIQ(&#39;ABA&#39;) = 1，其余与示例1相同。
 * 
 * 
 * 说明: 0 &lt;= S.length &lt;= 10000。
 * 
 *
 */