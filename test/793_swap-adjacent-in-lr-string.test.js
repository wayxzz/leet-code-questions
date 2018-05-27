/*
 *
 * 在一个由 &#39;L&#39; , &#39;R&#39; 和 &#39;X&#39; 三个字符组成的字符串（例如&quot;RXXLRXRXL&quot;）中进行移动操作。一次移动操作指用一个&quot;LX&quot;替换一个&quot;XL&quot;，或者用一个&quot;XR&quot;替换一个&quot;RX&quot;。现给定起始字符串start和结束字符串end，请编写代码，当且仅当存在一系列移动操作使得start可以转换成end时， 返回True。
 * 
 * 示例 :
 * 
 * 
 * 输入: start = &quot;RXXLRXRXL&quot;, end = &quot;XRLXXRRLX&quot;
 * 输出: True
 * 解释:
 * 我们可以通过以下几步将start转换成end:
 * RXXLRXRXL -&gt;
 * XRXLRXRXL -&gt;
 * XRLXRXRXL -&gt;
 * XRLXXRRXL -&gt;
 * XRLXXRRLX
 * 
 * 
 * 注意:
 * 
 * 
 * 	1 &lt;= len(start) = len(end) &lt;= 10000。
 * 	start和end中的字符串仅限于&#39;L&#39;, &#39;R&#39;和&#39;X&#39;。
 * 
 * 
 *
 */