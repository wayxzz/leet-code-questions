/*
 *
 * 你的赛车起始停留在位置 0，速度为 +1，正行驶在一个无限长的数轴上。（车也可以向负数方向行驶。）
 * 
 * 你的车会根据一系列由 A（加速）和 R（倒车）组成的指令进行自动驾驶&nbsp;。
 * 
 * 当车得到指令 &quot;A&quot; 时, 将会做出以下操作：&nbsp;position += speed, speed *= 2。
 * 
 * 当车得到指令 &quot;R&quot; 时, 将会做出以下操作：如果当前速度是正数，则将车速调整为&nbsp;speed = -1&nbsp;；否则将车速调整为&nbsp;speed = 1。&nbsp; (当前所处位置不变。)
 * 
 * 例如，当得到一系列指令 &quot;AAR&quot; 后, 你的车将会走过位置 0-&gt;1-&gt;3-&gt;3，并且速度变化为&nbsp;1-&gt;2-&gt;4-&gt;-1。
 * 
 * 现在给定一个目标位置，请给出能够到达目标位置的最短指令列表的长度。
 * 
 * 示例 1:
 * 输入: 
 * target = 3
 * 输出: 2
 * 解释: 
 * 最短指令列表为 &quot;AA&quot;
 * 位置变化为 0-&gt;1-&gt;3
 * 
 * 
 * 示例 2:
 * 输入: 
 * target = 6
 * 输出: 5
 * 解释: 
 * 最短指令列表为 &quot;AAARA&quot;
 * 位置变化为 0-&gt;1-&gt;3-&gt;7-&gt;7-&gt;6
 * 
 * 
 * 说明: 
 * 
 * 
 * 	1 &lt;= target（目标位置） &lt;= 10000。
 * 
 * 
 *
 */