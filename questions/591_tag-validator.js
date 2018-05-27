/*
 *
 * 给定一个表示代码片段的字符串，你需要实现一个验证器来解析这段代码，并返回它是否合法。合法的代码片段需要遵守以下的所有规则：
 * 
 * 
 * 	代码必须被合法的闭合标签包围。否则，代码是无效的。
 * 	闭合标签（不一定合法）要严格符合格式：&lt;TAG_NAME&gt;TAG_CONTENT&lt;/TAG_NAME&gt;。其中，&lt;TAG_NAME&gt;是起始标签，&lt;/TAG_NAME&gt;是结束标签。起始和结束标签中的 TAG_NAME 应当相同。当且仅当&nbsp;TAG_NAME 和 TAG_CONTENT 都是合法的，闭合标签才是合法的。
 * 	合法的&nbsp;TAG_NAME&nbsp;仅含有大写字母，长度在范围 [1,9] 之间。否则，该&nbsp;TAG_NAME&nbsp;是不合法的。
 * 	合法的&nbsp;TAG_CONTENT&nbsp;可以包含其他合法的闭合标签，cdata&nbsp;（请参考规则7）和任意字符（注意参考规则1）除了不匹配的&lt;、不匹配的起始和结束标签、不匹配的或带有不合法 TAG_NAME 的闭合标签。否则，TAG_CONTENT&nbsp;是不合法的。
 * 	一个起始标签，如果没有具有相同&nbsp;TAG_NAME 的结束标签与之匹配，是不合法的。反之亦然。不过，你也需要考虑标签嵌套的问题。
 * 	一个&lt;，如果你找不到一个后续的&gt;与之匹配，是不合法的。并且当你找到一个&lt;或&lt;/时，所有直到下一个&gt;的前的字符，都应当被解析为&nbsp;TAG_NAME（不一定合法）。
 * 	cdata 有如下格式：&lt;![CDATA[CDATA_CONTENT]]&gt;。CDATA_CONTENT&nbsp;的范围被定义成&nbsp;&lt;![CDATA[&nbsp;和后续的第一个&nbsp;]]&gt;之间的字符。
 * 	CDATA_CONTENT&nbsp;可以包含任意字符。cdata 的功能是阻止验证器解析CDATA_CONTENT，所以即使其中有一些字符可以被解析为标签（无论合法还是不合法），也应该将它们视为常规字符。
 * 
 * 
 * 合法代码的例子:
 * 
 * 
 * 输入: &quot;&lt;DIV&gt;This is the first line &lt;![CDATA[&lt;div&gt;]]&gt;&lt;/DIV&gt;&quot;
 * 
 * 输出: True
 * 
 * 解释: 
 * 
 * 代码被包含在了闭合的标签内： &lt;DIV&gt; 和 &lt;/DIV&gt; 。
 * 
 * TAG_NAME 是合法的，TAG_CONTENT 包含了一些字符和 cdata 。 
 * 
 * 即使 CDATA_CONTENT 含有不匹配的起始标签和不合法的 TAG_NAME，它应该被视为普通的文本，而不是标签。
 * 
 * 所以 TAG_CONTENT 是合法的，因此代码是合法的。最终返回True。
 * 
 * 
 * 输入: &quot;&lt;DIV&gt;&gt;&gt;  ![cdata[]] &lt;![CDATA[&lt;div&gt;]&gt;]]&gt;]]&gt;&gt;]&lt;/DIV&gt;&quot;
 * 
 * 输出: True
 * 
 * 解释:
 * 
 * 我们首先将代码分割为： start_tag|tag_content|end_tag 。
 * 
 * start_tag -&gt; &quot;&lt;DIV&gt;&quot;
 * 
 * end_tag -&gt; &quot;&lt;/DIV&gt;&quot;
 * 
 * tag_content 也可被分割为： text1|cdata|text2 。
 * 
 * text1 -&gt; &quot;&gt;&gt;  ![cdata[]] &quot;
 * 
 * cdata -&gt; &quot;&lt;![CDATA[&lt;div&gt;]&gt;]]&gt;&quot; ，其中 CDATA_CONTENT 为 &quot;&lt;div&gt;]&gt;&quot;
 * 
 * text2 -&gt; &quot;]]&gt;&gt;]&quot;
 * 
 * 
 * start_tag 不是 &quot;&lt;DIV&gt;&gt;&gt;&quot; 的原因参照规则 6 。
 * cdata 不是 &quot;&lt;![CDATA[&lt;div&gt;]&gt;]]&gt;]]&gt;&quot; 的原因参照规则 7 。
 * 
 * 
 * 不合法代码的例子:
 * 
 * 
 * 输入: &quot;&lt;A&gt;  &lt;B&gt; &lt;/A&gt;   &lt;/B&gt;&quot;
 * 输出: False
 * 解释: 不合法。如果 &quot;&lt;A&gt;&quot; 是闭合的，那么 &quot;&lt;B&gt;&quot; 一定是不匹配的，反之亦然。
 * 
 * 输入: &quot;&lt;DIV&gt;  div tag is not closed  &lt;DIV&gt;&quot;
 * 输出: False
 * 
 * 输入: &quot;&lt;DIV&gt;  unmatched &lt;  &lt;/DIV&gt;&quot;
 * 输出: False
 * 
 * 输入: &quot;&lt;DIV&gt; closed tags with invalid tag name  &lt;b&gt;123&lt;/b&gt; &lt;/DIV&gt;&quot;
 * 输出: False
 * 
 * 输入: &quot;&lt;DIV&gt; unmatched tags with invalid tag name  &lt;/1234567890&gt; and &lt;CDATA[[]]&gt;  &lt;/DIV&gt;&quot;
 * 输出: False
 * 
 * 输入: &quot;&lt;DIV&gt;  unmatched start tag &lt;B&gt;  and unmatched end tag &lt;/C&gt;  &lt;/DIV&gt;&quot;
 * 输出: False
 * 
 * 
 * 注意:
 * 
 * 
 * 	为简明起见，你可以假设输入的代码（包括提到的任意字符）只包含数字, 字母, &#39;&lt;&#39;,&#39;&gt;&#39;,&#39;/&#39;,&#39;!&#39;,&#39;[&#39;,&#39;]&#39;和&#39; &#39;。
 * 
 * 
 *
 */