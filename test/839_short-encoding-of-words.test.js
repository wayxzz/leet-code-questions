/*
 *
 * Given a list of words, we may encode it by writing a reference string S and a list of indexes A.
 * 
 * For example, if the list of words is [&quot;time&quot;, &quot;me&quot;, &quot;bell&quot;], we can write it as S = &quot;time#bell#&quot;&nbsp;and indexes = [0, 2, 5].
 * 
 * Then for each index, we will recover the word by reading from the reference string from that index until we reach a &quot;#&quot; character.
 * 
 * What is the length of the shortest reference string S possible that encodes the given words?
 * 
 * Example:
 * 
 * 
 * Input: words = [&quot;time&quot;, &quot;me&quot;, &quot;bell&quot;]
 * Output: 10
 * Explanation: S = &quot;time#bell#&quot; and indexes = [0, 2, 5].
 * 
 * 
 * Note:
 * 
 * 
 * 	1 &lt;= words.length&nbsp;&lt;= 2000.
 * 	1 &lt;=&nbsp;words[i].length&nbsp;&lt;= 7.
 * 	Each word&nbsp;has only&nbsp;lowercase letters.
 * 
 * 
 *
 */