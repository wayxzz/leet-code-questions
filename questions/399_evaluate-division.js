/*
 *
 * 给出方程式&nbsp;A / B = k, 其中&nbsp;A 和&nbsp;B 均为代表字符串的变量，&nbsp;k 是一个浮点型数字。根据已知方程式求解问题，并返回计算结果。如果结果不存在，则返回&nbsp;-1.0。
 * 
 * 示例 :
 * 给定&nbsp;a / b = 2.0, b / c = 3.0
 * 问题:  a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?&nbsp;
 * 返回&nbsp;[6.0, 0.5, -1.0, 1.0, -1.0 ]
 * 
 * 输入为:  vector&lt;pair&lt;string, string&gt;&gt; equations, vector&lt;double&gt;&amp; values, vector&lt;pair&lt;string, string&gt;&gt; queries(方程式，方程式结果，问题方程式)，&nbsp;其中&nbsp;equations.size() == values.size()，即方程式的长度与方程式结果长度相等（程式与结果一一对应），并且结果值均为正数。以上为方程式的描述。&nbsp;返回vector&lt;double&gt;类型。
 * 
 * 基于上述例子，输入如下：
 * 
 * 
 * equations(方程式) = [ [&quot;a&quot;, &quot;b&quot;], [&quot;b&quot;, &quot;c&quot;] ],
 * values(方程式结果) = [2.0, 3.0],
 * queries(问题方程式) = [ [&quot;a&quot;, &quot;c&quot;], [&quot;b&quot;, &quot;a&quot;], [&quot;a&quot;, &quot;e&quot;], [&quot;a&quot;, &quot;a&quot;], [&quot;x&quot;, &quot;x&quot;] ]. 
 * 
 * 
 * 输入总是有效的。你可以假设除法运算中不会出现除数为0的情况，且不存在任何矛盾的结果。
 * 
 *
 */