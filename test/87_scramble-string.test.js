/*
 *
 * 给定一个字符串&nbsp;s1，我们可以把它递归地分割成两个非空子字符串，从而将其表示为二叉树。
 * 
 * 下图是字符串&nbsp;s1&nbsp;=&nbsp;&quot;great&quot;&nbsp;的一种可能的表示形式。
 * 
 *     great
 *    /    \
 *   gr    eat
 *  / \    /  \
 * g   r  e   at
 *            / \
 *           a   t
 * 
 * 
 * 在扰乱这个字符串的过程中，我们可以挑选任何一个非叶节点，然后交换它的两个子节点。
 * 
 * 例如，如果我们挑选非叶节点&nbsp;&quot;gr&quot;&nbsp;，交换它的两个子节点，将会产生扰乱字符串&nbsp;&quot;rgeat&quot;&nbsp;。
 * 
 *     rgeat
 *    /    \
 *   rg    eat
 *  / \    /  \
 * r   g  e   at
 *            / \
 *           a   t
 * 
 * 
 * 我们将&nbsp;&quot;rgeat&rdquo;&nbsp;称作&nbsp;&quot;great&quot;&nbsp;的一个扰乱字符串。
 * 
 * 同样地，如果我们继续将其节点&nbsp;&quot;eat&quot;&nbsp;和&nbsp;&quot;at&quot;&nbsp;进行交换，将会产生另一个新的扰乱字符串&nbsp;&quot;rgtae&quot;&nbsp;。
 * 
 *     rgtae
 *    /    \
 *   rg    tae
 *  / \    /  \
 * r   g  ta  e
 *        / \
 *       t   a
 * 
 * 
 * 我们将&nbsp;&quot;rgtae&rdquo;&nbsp;称作&nbsp;&quot;great&quot;&nbsp;的一个扰乱字符串。
 * 
 * 给出两个长度相等的字符串 s1 和&nbsp;s2，判断&nbsp;s2&nbsp;是否是&nbsp;s1&nbsp;的扰乱字符串。
 * 
 * 示例&nbsp;1:
 * 
 * 输入: s1 = &quot;great&quot;, s2 = &quot;rgeat&quot;
 * 输出: true
 * 
 * 
 * 示例&nbsp;2:
 * 
 * 输入: s1 = &quot;abcde&quot;, s2 = &quot;caebd&quot;
 * 输出: false
 * 
 *
 */