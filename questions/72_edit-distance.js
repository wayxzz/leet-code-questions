/*
 *
 * 给定两个单词&nbsp;word1 和&nbsp;word2，计算出将&nbsp;word1&nbsp;转换成&nbsp;word2 所使用的最少操作数&nbsp;。
 * 
 * 你可以对一个单词进行如下三种操作：
 * 
 * 
 * 	插入一个字符
 * 	删除一个字符
 * 	替换一个字符
 * 
 * 
 * 示例&nbsp;1:
 * 
 * 输入: word1 = &quot;horse&quot;, word2 = &quot;ros&quot;
 * 输出: 3
 * 解释: 
 * horse -&gt; rorse (将 &#39;h&#39; 替换为 &#39;r&#39;)
 * rorse -&gt; rose (删除 &#39;r&#39;)
 * rose -&gt; ros (删除 &#39;e&#39;)
 * 
 * 
 * 示例&nbsp;2:
 * 
 * 输入: word1 = &quot;intention&quot;, word2 = &quot;execution&quot;
 * 输出: 5
 * 解释: 
 * intention -&gt; inention (删除 &#39;t&#39;)
 * inention -&gt; enention (将 &#39;i&#39; 替换为 &#39;e&#39;)
 * enention -&gt; exention (将 &#39;n&#39; 替换为 &#39;x&#39;)
 * exention -&gt; exection (将 &#39;n&#39; 替换为 &#39;c&#39;)
 * exection -&gt; execution (插入 &#39;u&#39;)
 * 
 * 
 *
 */