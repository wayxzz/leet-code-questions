/*
 *
 * 国际摩尔斯密码定义一种标准编码方式，将每个字母对应于一个由一系列点和短线组成的字符串，&nbsp;比如: &quot;a&quot; 对应 &quot;.-&quot;, &quot;b&quot; 对应 &quot;-...&quot;, &quot;c&quot; 对应 &quot;-.-.&quot;, 等等。
 * 
 * 为了方便，所有26个英文字母对应摩尔斯密码表如下：
 * 
 * [&quot;.-&quot;,&quot;-...&quot;,&quot;-.-.&quot;,&quot;-..&quot;,&quot;.&quot;,&quot;..-.&quot;,&quot;--.&quot;,&quot;....&quot;,&quot;..&quot;,&quot;.---&quot;,&quot;-.-&quot;,&quot;.-..&quot;,&quot;--&quot;,&quot;-.&quot;,&quot;---&quot;,&quot;.--.&quot;,&quot;--.-&quot;,&quot;.-.&quot;,&quot;...&quot;,&quot;-&quot;,&quot;..-&quot;,&quot;...-&quot;,&quot;.--&quot;,&quot;-..-&quot;,&quot;-.--&quot;,&quot;--..&quot;]
 * 
 * 给定一个单词列表，每个单词可以写成每个字母对应摩尔斯密码的组合。例如，&quot;cab&quot; 可以写成 &quot;-.-.-....-&quot;，(即 &quot;-.-.&quot; + &quot;-...&quot; + &quot;.-&quot;字符串的结合)。我们将这样一个连接过程称作单词翻译。
 * 
 * 返回我们可以获得所有词不同单词翻译的数量。
 * 
 * 例如:
 * 输入: words = [&quot;gin&quot;, &quot;zen&quot;, &quot;gig&quot;, &quot;msg&quot;]
 * 输出: 2
 * 解释: 
 * 各单词翻译如下:
 * &quot;gin&quot; -&gt; &quot;--...-.&quot;
 * &quot;zen&quot; -&gt; &quot;--...-.&quot;
 * &quot;gig&quot; -&gt; &quot;--...--.&quot;
 * &quot;msg&quot; -&gt; &quot;--...--.&quot;
 * 
 * 共有 2 种不同翻译, &quot;--...-.&quot; 和 &quot;--...--.&quot;.
 * 
 * 
 * &nbsp;
 * 
 * 注意:
 * 
 * 
 * 	单词列表words&nbsp;的长度不会超过 100。
 * 	每个单词&nbsp;words[i]的长度范围为&nbsp;[1, 12]。
 * 	每个单词&nbsp;words[i]只包含小写字母。
 * 
 * 
 *
 */