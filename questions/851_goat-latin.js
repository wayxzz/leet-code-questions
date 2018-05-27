/*
 *
 * A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.
 * 
 * We would like to convert the sentence to &quot;Goat Latin&quot;&nbsp;(a made-up language similar to Pig Latin.)
 * 
 * The rules of Goat Latin are as follows:
 * 
 * 
 * 	If a word begins with a vowel (a, e, i, o, or u), append &quot;ma&quot;&nbsp;to the end of the word.
 * 	For example, the word &#39;apple&#39; becomes &#39;applema&#39;.
 * 	&nbsp;
 * 	If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add &quot;ma&quot;.
 * 	For example, the word &quot;goat&quot;&nbsp;becomes &quot;oatgma&quot;.
 * 	&nbsp;
 * 	Add one letter &#39;a&#39;&nbsp;to the end of each word per its word index in the sentence, starting with 1.
 * 	For example,&nbsp;the first word gets &quot;a&quot; added to the end, the second word gets &quot;aa&quot; added to the end and so on.
 * 
 * 
 * Return the&nbsp;final sentence representing the conversion from S&nbsp;to Goat&nbsp;Latin.&nbsp;
 * 
 * &nbsp;
 * 
 * Example 1:
 * 
 * 
 * Input: &quot;I speak Goat Latin&quot;
 * Output: &quot;Imaa peaksmaaa oatGmaaaa atinLmaaaaa&quot;
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: &quot;The quick brown fox jumped over the lazy dog&quot;
 * Output: &quot;heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa&quot;
 * 
 * 
 * &nbsp;
 * 
 * Notes:
 * 
 * 
 * 	S contains only uppercase, lowercase and spaces.&nbsp;Exactly one space between each word.
 * 	1 &lt;= S.length &lt;= 150.
 * 
 *
 */