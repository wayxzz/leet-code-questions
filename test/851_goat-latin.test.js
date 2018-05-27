/*
 *
 * 给定一个由空格分割单词的句子&nbsp;S。每个单词只包含大写或小写字母。
 * 
 * 我们要将句子转换为&nbsp;&ldquo;Goat Latin&rdquo;（一种类似于 猪拉丁文&nbsp;- Pig Latin 的虚构语言）。
 * 
 * 山羊拉丁文的规则如下：
 * 
 * 
 * 	如果单词以元音开头（a, e, i, o, u），在单词后添加&quot;ma&quot;。
 * 	例如，单词&quot;apple&quot;变为&quot;applema&quot;。
 * 	
 * 	如果单词以辅音字母开头（即非元音字母），移除第一个字符并将它放到末尾，之后再添加&quot;ma&quot;。
 * 	例如，单词&quot;goat&quot;变为&quot;oatgma&quot;。
 * 	
 * 	根据单词在句子中的索引，在单词最后添加与索引相同数量的字母&#39;a&#39;，索引从1开始。
 * 	例如，在第一个单词后添加&quot;a&quot;，在第二个单词后添加&quot;aa&quot;，以此类推。
 * 
 * 
 * 返回将&nbsp;S&nbsp;转换为山羊拉丁文后的句子。
 * 
 * 示例 1:
 * 
 * 
 * 输入: &quot;I speak Goat Latin&quot;
 * 输出: &quot;Imaa peaksmaaa oatGmaaaa atinLmaaaaa&quot;
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: &quot;The quick brown fox jumped over the lazy dog&quot;
 * 输出: &quot;heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa&quot;
 * 
 * 
 * 说明:
 * 
 * 
 * 	S&nbsp;中仅包含大小写字母和空格。单词间有且仅有一个空格。
 * 	1 &lt;= S.length &lt;= 150。
 * 
 * 
 *
 */