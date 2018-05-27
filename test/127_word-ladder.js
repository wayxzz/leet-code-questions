/*
 *
 * 给定两个单词（beginWord&nbsp;和 endWord）和一个字典，找到从&nbsp;beginWord 到&nbsp;endWord 的最短转换序列的长度。转换需遵循如下规则：
 * 
 * 
 * 	每次转换只能改变一个字母。
 * 	转换过程中的中间单词必须是字典中的单词。
 * 
 * 
 * 说明:
 * 
 * 
 * 	如果不存在这样的转换序列，返回 0。
 * 	所有单词具有相同的长度。
 * 	所有单词只由小写字母组成。
 * 	字典中不存在重复的单词。
 * 	你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
 * 
 * 
 * 示例&nbsp;1:
 * 
 * 输入:
 * beginWord = &quot;hit&quot;,
 * endWord = &quot;cog&quot;,
 * wordList = [&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;lot&quot;,&quot;log&quot;,&quot;cog&quot;]
 * 
 * 输出: 5
 * 
 * 解释: 一个最短转换序列是 &quot;hit&quot; -&gt; &quot;hot&quot; -&gt; &quot;dot&quot; -&gt; &quot;dog&quot; -&gt; &quot;cog&quot;,
 *      返回它的长度 5。
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * beginWord = &quot;hit&quot;
 * endWord = &quot;cog&quot;
 * wordList = [&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;lot&quot;,&quot;log&quot;]
 * 
 * 输出:&nbsp;0
 * 
 * 解释:&nbsp;endWord &quot;cog&quot; 不在字典中，所以无法进行转换。
 * 
 *
 */