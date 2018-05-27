/*
 *
 * 罗马数字包含以下七种字符：&nbsp;I，&nbsp;V，&nbsp;X，&nbsp;L，C，D&nbsp;和&nbsp;M。
 * 
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 
 * 例如， 罗马数字 2 写做&nbsp;II&nbsp;，即为两个并列的 1。12 写做&nbsp;XII&nbsp;，即为&nbsp;X&nbsp;+&nbsp;II&nbsp;。 27 写做&nbsp;&nbsp;XXVII, 即为&nbsp;XX&nbsp;+&nbsp;V&nbsp;+&nbsp;II&nbsp;。
 * 
 * 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做&nbsp;IIII，而是&nbsp;IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为&nbsp;IX。这个特殊的规则只适用于以下六种情况：
 * 
 * 
 * 	I&nbsp;可以放在&nbsp;V&nbsp;(5) 和&nbsp;X&nbsp;(10) 的左边，来表示 4 和 9。
 * 	X&nbsp;可以放在&nbsp;L&nbsp;(50) 和&nbsp;C&nbsp;(100) 的左边，来表示 40 和&nbsp;90。&nbsp;
 * 	C&nbsp;可以放在&nbsp;D&nbsp;(500) 和&nbsp;M&nbsp;(1000) 的左边，来表示&nbsp;400 和&nbsp;900。
 * 
 * 
 * 给定一个整数，将其转为罗马数字。输入确保在 1&nbsp;到 3999 的范围内。
 * 
 * 示例&nbsp;1:
 * 
 * 输入:&nbsp;3
 * 输出: &quot;III&quot;
 * 
 * 示例&nbsp;2:
 * 
 * 输入:&nbsp;4
 * 输出: &quot;IV&quot;
 * 
 * 示例&nbsp;3:
 * 
 * 输入:&nbsp;9
 * 输出: &quot;IX&quot;
 * 
 * 示例&nbsp;4:
 * 
 * 输入:&nbsp;58
 * 输出: &quot;LVIII&quot;
 * 解释: C = 100, L = 50, XXX = 30, III = 3.
 * 
 * 
 * 示例&nbsp;5:
 * 
 * 输入:&nbsp;1994
 * 输出: &quot;MCMXCIV&quot;
 * 解释: M = 1000, CM = 900, XC = 90, IV = 4.
 * 
 *
 */