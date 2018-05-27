/*
 *
 * 一个网站域名，如&quot;discuss.leetcode.com&quot;，包含了多个子域名。作为顶级域名，常用的有&quot;com&quot;，下一级则有&quot;leetcode.com&quot;，最低的一级为&quot;discuss.leetcode.com&quot;。当我们访问域名&quot;discuss.leetcode.com&quot;时，也同时访问了其父域名&quot;leetcode.com&quot;以及顶级域名&nbsp;&quot;com&quot;。
 * 
 * 给定一个带访问次数和域名的组合，要求分别计算每个域名被访问的次数。其格式为访问次数+空格+地址，例如：&quot;9001 discuss.leetcode.com&quot;。
 * 
 * 接下来会给出一组访问次数和域名组合的列表cpdomains&nbsp;。要求解析出所有域名的访问次数，输出格式和输入格式相同，不限定先后顺序。
 * 
 * 
 * 示例 1:
 * 输入: 
 * [&quot;9001 discuss.leetcode.com&quot;]
 * 输出: 
 * [&quot;9001 discuss.leetcode.com&quot;, &quot;9001 leetcode.com&quot;, &quot;9001 com&quot;]
 * 说明: 
 * 例子中仅包含一个网站域名：&quot;discuss.leetcode.com&quot;。按照前文假设，子域名&quot;leetcode.com&quot;和&quot;com&quot;都会被访问，所以它们都被访问了9001次。
 * 
 * 
 * 
 * 示例 2
 * 输入: 
 * [&quot;900 google.mail.com&quot;, &quot;50 yahoo.com&quot;, &quot;1 intel.mail.com&quot;, &quot;5 wiki.org&quot;]
 * 输出: 
 * [&quot;901 mail.com&quot;,&quot;50 yahoo.com&quot;,&quot;900 google.mail.com&quot;,&quot;5 wiki.org&quot;,&quot;5 org&quot;,&quot;1 intel.mail.com&quot;,&quot;951 com&quot;]
 * 说明: 
 * 按照假设，会访问&quot;google.mail.com&quot; 900次，&quot;yahoo.com&quot; 50次，&quot;intel.mail.com&quot; 1次，&quot;wiki.org&quot; 5次。
 * 而对于父域名，会访问&quot;mail.com&quot; 900+1 = 901次，&quot;com&quot; 900 + 50 + 1 = 951次，和 &quot;org&quot; 5 次。
 * 
 * 
 * 注意事项：
 * 
 * 
 * 	&nbsp;cpdomains&nbsp;的长度小于&nbsp;100。
 * 	每个域名的长度小于100。
 * 	每个域名地址包含一个或两个&quot;.&quot;符号。
 * 	输入中任意一个域名的访问次数都小于10000。
 * 
 * 
 *
 */