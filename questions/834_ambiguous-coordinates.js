/*
 *
 * We had some 2-dimensional coordinates, like &quot;(1, 3)&quot; or &quot;(2, 0.5)&quot;.&nbsp; Then, we removed&nbsp;all commas, decimal points, and spaces, and ended up with the string&nbsp;S.&nbsp; Return a list of strings representing&nbsp;all possibilities for what our original coordinates could have been.
 * 
 * Our original representation never had extraneous zeroes, so we never started with numbers like &quot;00&quot;, &quot;0.0&quot;, &quot;0.00&quot;, &quot;1.0&quot;, &quot;001&quot;, &quot;00.01&quot;, or any other number that can be represented with&nbsp;less digits.&nbsp; Also, a decimal point within a number never occurs without at least one digit occuring before it, so we never started with numbers like &quot;.1&quot;.
 * 
 * The final answer list can be returned in any order.&nbsp; Also note that all coordinates in the final answer&nbsp;have exactly one space between them (occurring after the comma.)
 * 
 * 
 * Example 1:
 * Input: &quot;(123)&quot;
 * Output: [&quot;(1, 23)&quot;, &quot;(12, 3)&quot;, &quot;(1.2, 3)&quot;, &quot;(1, 2.3)&quot;]
 * 
 * 
 * 
 * Example 2:
 * Input: &quot;(00011)&quot;
 * Output: &nbsp;[&quot;(0.001, 1)&quot;, &quot;(0, 0.011)&quot;]
 * Explanation: 
 * 0.0, 00, 0001 or 00.01 are not allowed.
 * 
 * 
 * 
 * Example 3:
 * Input: &quot;(0123)&quot;
 * Output: [&quot;(0, 123)&quot;, &quot;(0, 12.3)&quot;, &quot;(0, 1.23)&quot;, &quot;(0.1, 23)&quot;, &quot;(0.1, 2.3)&quot;, &quot;(0.12, 3)&quot;]
 * 
 * 
 * 
 * Example 4:
 * Input: &quot;(100)&quot;
 * Output: [(10, 0)]
 * Explanation: 
 * 1.0 is not allowed.
 * 
 * 
 * &nbsp;
 * 
 * Note: 
 * 
 * 
 * 	4 &lt;= S.length &lt;= 12.
 * 	S[0] = &quot;(&quot;, S[S.length - 1] = &quot;)&quot;, and the other elements in S are digits.
 * 
 * 
 * &nbsp;
 *
 */