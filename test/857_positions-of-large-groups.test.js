/*
 *
 * 在一个由小写字母构成的字符串&nbsp;S&nbsp;中，包含由一些连续的相同字符所构成的分组。
 * 
 * 例如，在字符串 S = &quot;abbxxxxzyy&quot;&nbsp;中，就含有 &quot;a&quot;, &quot;bb&quot;, &quot;xxxx&quot;, &quot;z&quot; 和 &quot;yy&quot; 这样的一些分组。
 * 
 * 我们称所有包含大于或等于三个连续字符的分组为较大分组。找到每一个较大分组的起始和终止位置。
 * 
 * 最终结果按照字典顺序输出。
 * 
 * 示例&nbsp;1:
 * 
 * 
 * 输入: &quot;abbxxxxzzy&quot;
 * 输出: [[3,6]]
 * 解释: &quot;xxxx&quot; 是一个起始于 3 且终止于 6 的较大分组。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: &quot;abc&quot;
 * 输出: []
 * 解释: &quot;a&quot;,&quot;b&quot; 和 &quot;c&quot; 均不是符合要求的较大分组。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: &quot;abcdddeeeeaabbbcd&quot;
 * 输出: [[3,5],[6,9],[12,14]]
 * 
 * 说明:&nbsp;&nbsp;1 &lt;= S.length &lt;= 1000
 * 
 *
 */