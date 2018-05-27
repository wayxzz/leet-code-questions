/*
 *
 * 实现一个带有buildDict, 以及&nbsp;search方法的魔法字典。
 * 
 * 对于buildDict方法，你将被给定一串不重复的单词来构建一个字典。
 * 
 * 对于search方法，你将被给定一个单词，并且判定能否只将这个单词中一个字母换成另一个字母，使得所形成的新单词存在于你构建的字典中。
 * 
 * 示例 1:
 * 
 * 
 * Input: buildDict([&quot;hello&quot;, &quot;leetcode&quot;]), Output: Null
 * Input: search(&quot;hello&quot;), Output: False
 * Input: search(&quot;hhllo&quot;), Output: True
 * Input: search(&quot;hell&quot;), Output: False
 * Input: search(&quot;leetcoded&quot;), Output: False
 * 
 * 
 * 注意:
 * 
 * 
 * 	你可以假设所有输入都是小写字母&nbsp;a-z。
 * 	为了便于竞赛，测试所用的数据量很小。你可以在竞赛结束后，考虑更高效的算法。
 * 	请记住重置MagicDictionary类中声明的类变量，因为静态/类变量会在多个测试用例中保留。 请参阅这里了解更多详情。
 * 
 * 
 *
 */