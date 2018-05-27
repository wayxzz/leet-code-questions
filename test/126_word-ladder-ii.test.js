/*
 *
 * 给定两个单词（beginWord 和 endWord）和一个字典 wordList，找出所有从 beginWord 到 endWord 的最短转换序列。转换需遵循如下规则：
 * 
 * 
 * 	每次转换只能改变一个字母。
 * 	转换过程中的中间单词必须是字典中的单词。
 * 
 * 
 * 说明:
 * 
 * 
 * 	如果不存在这样的转换序列，返回一个空列表。
 * 	所有单词具有相同的长度。
 * 	所有单词只由小写字母组成。
 * 	字典中不存在重复的单词。
 * 	你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * beginWord = &quot;hit&quot;,
 * endWord = &quot;cog&quot;,
 * wordList = [&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;lot&quot;,&quot;log&quot;,&quot;cog&quot;]
 * 
 * 输出:
 * [
 *   [&quot;hit&quot;,&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;cog&quot;],
 * &nbsp; [&quot;hit&quot;,&quot;hot&quot;,&quot;lot&quot;,&quot;log&quot;,&quot;cog&quot;]
 * ]
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * beginWord = &quot;hit&quot;
 * endWord = &quot;cog&quot;
 * wordList = [&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;lot&quot;,&quot;log&quot;]
 * 
 * 输出: []
 * 
 * 解释:&nbsp;endWord &quot;cog&quot; 不在字典中，所以不存在符合要求的转换序列。
 * 
 *
 */