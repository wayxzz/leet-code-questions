/*
 *
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的句子。
 * 
 * 说明：
 * 
 * 
 * 	分隔时可以重复使用字典中的单词。
 * 	你可以假设字典中没有重复的单词。
 * 
 * 
 * 示例 1：
 * 
 * 输入:
 * s = &quot;catsanddog&quot;
 * wordDict = [&quot;cat&quot;, &quot;cats&quot;, &quot;and&quot;, &quot;sand&quot;, &quot;dog&quot;]
 * 输出:
 * [
 * &nbsp; &quot;cats and dog&quot;,
 * &nbsp; &quot;cat sand dog&quot;
 * ]
 * 
 * 
 * 示例 2：
 * 
 * 输入:
 * s = &quot;pineapplepenapple&quot;
 * wordDict = [&quot;apple&quot;, &quot;pen&quot;, &quot;applepen&quot;, &quot;pine&quot;, &quot;pineapple&quot;]
 * 输出:
 * [
 * &nbsp; &quot;pine apple pen apple&quot;,
 * &nbsp; &quot;pineapple pen apple&quot;,
 * &nbsp; &quot;pine applepen apple&quot;
 * ]
 * 解释: 注意你可以重复使用字典中的单词。
 * 
 * 
 * 示例&nbsp;3：
 * 
 * 输入:
 * s = &quot;catsandog&quot;
 * wordDict = [&quot;cats&quot;, &quot;dog&quot;, &quot;sand&quot;, &quot;and&quot;, &quot;cat&quot;]
 * 输出:
 * []
 * 
 * 
 *
 */