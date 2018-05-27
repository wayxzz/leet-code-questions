/*
 *
 * 求解一个给定的方程，将x以字符串&quot;x=#value&quot;的形式返回。该方程仅包含&#39;+&#39;，&#39; - &#39;操作，变量&nbsp;x&nbsp;和其对应系数。
 * 
 * 如果方程没有解，请返回&ldquo;No solution&rdquo;。
 * 
 * 如果方程有无限解，则返回&ldquo;Infinite solutions&rdquo;。
 * 
 * 如果方程中只有一个解，要保证返回值&nbsp;x&nbsp;是一个整数。
 * 
 * 示例 1：
 * 
 * 
 * 输入: &quot;x+5-3+x=6+x-2&quot;
 * 输出: &quot;x=2&quot;
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: &quot;x=x&quot;
 * 输出: &quot;Infinite solutions&quot;
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: &quot;2x=x&quot;
 * 输出: &quot;x=0&quot;
 * 
 * 
 * 示例 4:
 * 
 * 
 * 输入: &quot;2x+3x-6x=x+2&quot;
 * 输出: &quot;x=-1&quot;
 * 
 * 
 * 示例 5:
 * 
 * 
 * 输入: &quot;x=x+2&quot;
 * 输出: &quot;No solution&quot;
 * 
 * 
 *
 */