/*
 *
 * 给定多个&nbsp;words，words[i]&nbsp;的权重为&nbsp;i&nbsp;。
 * 
 * 设计一个类&nbsp;WordFilter&nbsp;实现函数WordFilter.f(String prefix, String suffix)。这个函数将返回具有前缀&nbsp;prefix&nbsp;和后缀suffix&nbsp;的词的最大权重。如果没有这样的词，返回 -1。
 * 
 * 例子:
 * 
 * 
 * 输入:
 * WordFilter([&quot;apple&quot;])
 * WordFilter.f(&quot;a&quot;, &quot;e&quot;) // 返回 0
 * WordFilter.f(&quot;b&quot;, &quot;&quot;) // 返回 -1
 * 
 * 
 * 注意:
 * 
 * 
 * 	words的长度在[1, 15000]之间。
 * 	对于每个测试用例，最多会有words.length次对WordFilter.f的调用。
 * 	words[i]的长度在[1, 10]之间。
 * 	prefix, suffix的长度在[0, 10]之前。
 * 	words[i]和prefix, suffix只包含小写字母。
 * 
 * 
 *
 */