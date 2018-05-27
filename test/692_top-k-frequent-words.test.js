/*
 *
 * 给一非空的单词列表，返回前&nbsp;k&nbsp;个出现次数最多的单词。
 * 
 * 返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。
 * 
 * 示例 1：
 * 
 * 
 * 输入: [&quot;i&quot;, &quot;love&quot;, &quot;leetcode&quot;, &quot;i&quot;, &quot;love&quot;, &quot;coding&quot;], k = 2
 * 输出: [&quot;i&quot;, &quot;love&quot;]
 * 解析: &quot;i&quot; 和 &quot;love&quot; 为出现次数最多的两个单词，均为2次。
 *     注意，按字母顺序 &quot;i&quot; 在 &quot;love&quot; 之前。
 * 
 * 
 * &nbsp;
 * 
 * 示例 2：
 * 
 * 
 * 输入: [&quot;the&quot;, &quot;day&quot;, &quot;is&quot;, &quot;sunny&quot;, &quot;the&quot;, &quot;the&quot;, &quot;the&quot;, &quot;sunny&quot;, &quot;is&quot;, &quot;is&quot;], k = 4
 * 输出: [&quot;the&quot;, &quot;is&quot;, &quot;sunny&quot;, &quot;day&quot;]
 * 解析: &quot;the&quot;, &quot;is&quot;, &quot;sunny&quot; 和 &quot;day&quot; 是出现次数最多的四个单词，
 *     出现次数依次为 4, 3, 2 和 1 次。
 * 
 * 
 * &nbsp;
 * 
 * 注意：
 * 
 * 
 * 	假定 k 总为有效值， 1 &le; k &le; 集合元素数。
 * 	输入的单词均由小写字母组成。
 * 
 * 
 * &nbsp;
 * 
 * 扩展练习：
 * 
 * 
 * 	尝试以&nbsp;O(n log k) 时间复杂度和&nbsp;O(n) 空间复杂度解决。
 * 
 * 
 *
 */