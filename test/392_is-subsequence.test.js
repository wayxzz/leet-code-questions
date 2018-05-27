/*
 *
 * 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
 * 
 * 你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 &lt;=100）。
 * 
 * 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，&quot;ace&quot;是&quot;abcde&quot;的一个子序列，而&quot;aec&quot;不是）。
 * 
 * 示例&nbsp;1:
 * s = &quot;abc&quot;, t = &quot;ahbgdc&quot;
 * 
 * 返回&nbsp;true.
 * 
 * 示例&nbsp;2:
 * s = &quot;axc&quot;, t = &quot;ahbgdc&quot;
 * 
 * 返回&nbsp;false.
 * 
 * 后续挑战 :
 * 
 * 如果有大量输入的 S，称作S1, S2, ... , Sk 其中 k &gt;= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？
 * 
 * 致谢:
 * 
 * 特别感谢 @pbrother&nbsp;添加此问题并且创建所有测试用例。
 * 
 *
 */