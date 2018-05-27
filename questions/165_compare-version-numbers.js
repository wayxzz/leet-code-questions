/*
 *
 * 比较两个版本号 version1&nbsp;和 version2。
 * 如果&nbsp;version1&nbsp;&gt;&nbsp;version2&nbsp;返回&nbsp;1，如果&nbsp;version1&nbsp;&lt;&nbsp;version2 返回 -1， 除此之外返回 0。
 * 
 * 你可以假设版本字符串非空，并且只包含数字和&nbsp;. 字符。
 * 
 * &nbsp;. 字符不代表小数点，而是用于分隔数字序列。
 * 
 * 例如，2.5 不是&ldquo;两个半&rdquo;，也不是&ldquo;差一半到三&rdquo;，而是第二版中的第五个小版本。
 * 
 * 示例&nbsp;1:
 * 
 * 输入: version1 = &quot;0.1&quot;, version2 = &quot;1.1&quot;
 * 输出: -1
 * 
 * 示例 2:
 * 
 * 输入: version1 = &quot;1.0.1&quot;, version2 = &quot;1&quot;
 * 输出: 1
 * 
 * 示例 3:
 * 
 * 输入: version1 = &quot;7.5.2.4&quot;, version2 = &quot;7.5.3&quot;
 * 输出: -1
 * 
 *
 */