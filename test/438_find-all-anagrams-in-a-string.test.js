/*
 *
 * 给定一个字符串&nbsp;s&nbsp;和一个非空字符串&nbsp;p，找到&nbsp;s&nbsp;中所有是&nbsp;p&nbsp;的字母异位词的子串，返回这些子串的起始索引。
 * 
 * 字符串只包含小写英文字母，并且字符串&nbsp;s&nbsp;和 p&nbsp;的长度都不超过 20100。
 * 
 * 说明：
 * 
 * 
 * 	字母异位词指字母相同，但排列不同的字符串。
 * 	不考虑答案输出的顺序。
 * 
 * 
 * 示例&nbsp;1:
 * 
 * 
 * 输入:
 * s: &quot;cbaebabacd&quot; p: &quot;abc&quot;
 * 
 * 输出:
 * [0, 6]
 * 
 * 解释:
 * 起始索引等于 0 的子串是 &quot;cba&quot;, 它是 &quot;abc&quot; 的字母异位词。
 * 起始索引等于 6 的子串是 &quot;bac&quot;, 它是 &quot;abc&quot; 的字母异位词。
 * 
 * 
 * &nbsp;示例 2:
 * 
 * 
 * 输入:
 * s: &quot;abab&quot; p: &quot;ab&quot;
 * 
 * 输出:
 * [0, 1, 2]
 * 
 * 解释:
 * 起始索引等于 0 的子串是 &quot;ab&quot;, 它是 &quot;ab&quot; 的字母异位词。
 * 起始索引等于 1 的子串是 &quot;ba&quot;, 它是 &quot;ab&quot; 的字母异位词。
 * 起始索引等于 2 的子串是 &quot;ab&quot;, 它是 &quot;ab&quot; 的字母异位词。
 * 
 * 
 *
 */