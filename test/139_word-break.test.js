/*
 *
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定&nbsp;s 是否可以被空格拆分为一个或多个在字典中出现的单词。
 * 
 * 说明：
 * 
 * 
 * 	拆分时可以重复使用字典中的单词。
 * 	你可以假设字典中没有重复的单词。
 * 
 * 
 * 示例 1：
 * 
 * 输入: s = &quot;leetcode&quot;, wordDict = [&quot;leet&quot;, &quot;code&quot;]
 * 输出: true
 * 解释: 返回 true 因为 &quot;leetcode&quot; 可以被拆分成 &quot;leet code&quot;。
 * 
 * 
 * 示例 2：
 * 
 * 输入: s = &quot;applepenapple&quot;, wordDict = [&quot;apple&quot;, &quot;pen&quot;]
 * 输出: true
 * 解释: 返回 true 因为 &quot;applepenapple&quot; 可以被拆分成 &quot;apple pen apple&quot;。
 * &nbsp;    注意你可以重复使用字典中的单词。
 * 
 * 
 * 示例 3：
 * 
 * 输入: s = &quot;catsandog&quot;, wordDict = [&quot;cats&quot;, &quot;dog&quot;, &quot;sand&quot;, &quot;and&quot;, &quot;cat&quot;]
 * 输出: false
 * 
 * 
 *
 */