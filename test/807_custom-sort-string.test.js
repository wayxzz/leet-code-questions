/*
 *
 * 字符串S和 T 只包含小写字符。在S中，所有字符只会出现一次。
 * 
 * S 已经根据某种规则进行了排序。我们要根据S中的字符顺序对T进行排序。更具体地说，如果S中x在y之前出现，那么返回的字符串中x也应出现在y之前。
 * 
 * 返回任意一种符合条件的字符串T。
 * 
 * 
 * 示例:
 * 输入:
 * S = &quot;cba&quot;
 * T = &quot;abcd&quot;
 * 输出: &quot;cbad&quot;
 * 解释: 
 * S中出现了字符 &quot;a&quot;, &quot;b&quot;, &quot;c&quot;, 所以 &quot;a&quot;, &quot;b&quot;, &quot;c&quot; 的顺序应该是 &quot;c&quot;, &quot;b&quot;, &quot;a&quot;. 
 * 由于 &quot;d&quot; 没有在S中出现, 它可以放在T的任意位置. &quot;dcba&quot;, &quot;cdba&quot;, &quot;cbda&quot; 都是合法的输出。
 * 
 * 
 * 注意:
 * 
 * 
 * 	S的最大长度为26，其中没有重复的字符。
 * 	T的最大长度为200。
 * 	S和T只包含小写字符。
 * 
 * 
 *
 */