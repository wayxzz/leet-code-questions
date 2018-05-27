/*
 *
 * 给定一个列表 accounts，每个元素 accounts[i]&nbsp;是一个字符串列表，其中第一个元素 accounts[i][0]&nbsp;是&nbsp;名称 (name)，其余元素是 emails 表示该帐户的邮箱地址。
 * 
 * 现在，我们想合并这些帐户。如果两个帐户都有一些共同的邮件地址，则两个帐户必定属于同一个人。请注意，即使两个帐户具有相同的名称，它们也可能属于不同的人，因为人们可能具有相同的名称。一个人最初可以拥有任意数量的帐户，但其所有帐户都具有相同的名称。
 * 
 * 合并帐户后，按以下格式返回帐户：每个帐户的第一个元素是名称，其余元素是按顺序排列的邮箱地址。accounts 本身可以以任意顺序返回。
 * 
 * 例子 1:
 * 
 * 
 * Input: 
 * accounts = [[&quot;John&quot;, &quot;johnsmith@mail.com&quot;, &quot;john00@mail.com&quot;], [&quot;John&quot;, &quot;johnnybravo@mail.com&quot;], [&quot;John&quot;, &quot;johnsmith@mail.com&quot;, &quot;john_newyork@mail.com&quot;], [&quot;Mary&quot;, &quot;mary@mail.com&quot;]]
 * Output: [[&quot;John&quot;, &#39;john00@mail.com&#39;, &#39;john_newyork@mail.com&#39;, &#39;johnsmith@mail.com&#39;],  [&quot;John&quot;, &quot;johnnybravo@mail.com&quot;], [&quot;Mary&quot;, &quot;mary@mail.com&quot;]]
 * Explanation: 
 *   第一个和第三个 John 是同一个人，因为他们有共同的电子邮件 &quot;johnsmith@mail.com&quot;。 
 *   第二个 John 和 Mary 是不同的人，因为他们的电子邮件地址没有被其他帐户使用。
 *   我们可以以任何顺序返回这些列表，例如答案[[&#39;Mary&#39;，&#39;mary@mail.com&#39;]，[&#39;John&#39;，&#39;johnnybravo@mail.com&#39;]，
 *   [&#39;John&#39;，&#39;john00@mail.com&#39;，&#39;john_newyork@mail.com&#39;，&#39;johnsmith@mail.com&#39;]]仍然会被接受。
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 	accounts的长度将在[1，1000]的范围内。
 * 	accounts[i]的长度将在[1，10]的范围内。
 * 	accounts[i][j]的长度将在[1，30]的范围内。
 * 
 * 
 *
 */