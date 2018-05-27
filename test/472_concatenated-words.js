/*
 *
 * 给定一个不含重复单词的列表，编写一个程序，返回给定单词列表中所有的连接词。
 * 
 * 连接词的定义为：一个字符串完全是由至少两个给定数组中的单词组成的。
 * 
 * 示例:
 * 
 * 
 * 输入: [&quot;cat&quot;,&quot;cats&quot;,&quot;catsdogcats&quot;,&quot;dog&quot;,&quot;dogcatsdog&quot;,&quot;hippopotamuses&quot;,&quot;rat&quot;,&quot;ratcatdogcat&quot;]
 * 
 * 输出: [&quot;catsdogcats&quot;,&quot;dogcatsdog&quot;,&quot;ratcatdogcat&quot;]
 * 
 * 解释: &quot;catsdogcats&quot;由&quot;cats&quot;, &quot;dog&quot; 和 &quot;cats&quot;组成; 
 *      &quot;dogcatsdog&quot;由&quot;dog&quot;, &quot;cats&quot;和&quot;dog&quot;组成; 
 *      &quot;ratcatdogcat&quot;由&quot;rat&quot;, &quot;cat&quot;, &quot;dog&quot;和&quot;cat&quot;组成。
 * 
 * 
 * 说明:
 * 
 * 
 * 	给定数组的元素总数不超过 10000。
 * 	给定数组中元素的长度总和不超过 600000。
 * 	所有输入字符串只包含小写字母。
 * 	不需要考虑答案输出的顺序。
 * 
 * 
 *
 */