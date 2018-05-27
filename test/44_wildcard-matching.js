/*
 *
 * 给定一个字符串&nbsp;(s) 和一个字符模式&nbsp;(p) ，实现一个支持&nbsp;&#39;?&#39;&nbsp;和&nbsp;&#39;*&#39;&nbsp;的通配符匹配。
 * 
 * &#39;?&#39; 可以匹配任何单个字符。
 * &#39;*&#39; 可以匹配任意字符串（包括空字符串）。
 * 
 * 
 * 两个字符串完全匹配才算匹配成功。
 * 
 * 说明:
 * 
 * 
 * 	s&nbsp;可能为空，且只包含从&nbsp;a-z&nbsp;的小写字母。
 * 	p&nbsp;可能为空，且只包含从&nbsp;a-z&nbsp;的小写字母，以及字符&nbsp;?&nbsp;和&nbsp;*。
 * 
 * 
 * 示例&nbsp;1:
 * 
 * 输入:
 * s = &quot;aa&quot;
 * p = &quot;a&quot;
 * 输出: false
 * 解释: &quot;a&quot; 无法匹配 &quot;aa&quot; 整个字符串。
 * 
 * 示例&nbsp;2:
 * 
 * 输入:
 * s = &quot;aa&quot;
 * p = &quot;*&quot;
 * 输出: true
 * 解释:&nbsp;&#39;*&#39; 可以匹配任意字符串。
 * 
 * 
 * 示例&nbsp;3:
 * 
 * 输入:
 * s = &quot;cb&quot;
 * p = &quot;?a&quot;
 * 输出: false
 * 解释:&nbsp;&#39;?&#39; 可以匹配 &#39;c&#39;, 但第二个 &#39;a&#39; 无法匹配 &#39;b&#39;。
 * 
 * 
 * 示例&nbsp;4:
 * 
 * 输入:
 * s = &quot;adceb&quot;
 * p = &quot;*a*b&quot;
 * 输出: true
 * 解释:&nbsp;第一个 &#39;*&#39; 可以匹配空字符串, 第二个 &#39;*&#39; 可以匹配字符串 &quot;dce&quot;.
 * 
 * 
 * 示例&nbsp;5:
 * 
 * 输入:
 * s = &quot;acdcb&quot;
 * p = &quot;a*c?b&quot;
 * 输入: false
 * 
 *
 */