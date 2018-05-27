/*
 *
 * 回忆一下祖玛游戏。现在桌上有一串球，颜色有红色(R)，黄色(Y)，蓝色(B)，绿色(G)，还有白色(W)。 现在你手里也有几个球。
 * 
 * 每一次，你可以从手里的球选一个，然后把这个球插入到一串球中的某个位置上（包括最左端，最右端）。接着，如果有出现三个或者三个以上颜色相同的球相连的话，就把它们移除掉。重复这一步骤直到桌上所有的球都被移除。
 * 
 * 找到插入并可以移除掉桌上所有球所需的最少的球数。如果不能移除桌上所有的球，输出 -1 。
 * 
 * 
 * 示例:
 * 输入: &quot;WRRBBW&quot;, &quot;RB&quot; 
 * 输出: -1 
 * 解释: WRRBBW -&gt; WRR[R]BBW -&gt; WBBW -&gt; WBB[B]W -&gt; WW （翻译者标注：手上球已经用完，桌上还剩两个球无法消除，返回-1）
 * 
 * 输入: &quot;WWRRBBWW&quot;, &quot;WRBRW&quot; 
 * 输出: 2 
 * 解释: WWRRBBWW -&gt; WWRR[R]BBWW -&gt; WWBBWW -&gt; WWBB[B]WW -&gt; WWWW -&gt; empty
 * 
 * 输入:&quot;G&quot;, &quot;GGGGG&quot; 
 * 输出: 2 
 * 解释: G -&gt; G[G] -&gt; GG[G] -&gt; empty 
 * 
 * 输入: &quot;RBYYBBRRB&quot;, &quot;YRBGB&quot; 
 * 输出: 3 
 * 解释: RBYYBBRRB -&gt; RBYY[Y]BBRRB -&gt; RBBBRRB -&gt; RRRB -&gt; B -&gt; B[B] -&gt; BB[B] -&gt; empty 
 * 
 * 
 * 标注:
 * 
 * 
 * 	你可以假设桌上一开始的球中，不会有三个及三个以上颜色相同且连着的球。
 * 	桌上的球不会超过20个，输入的数据中代表这些球的字符串的名字是 &quot;board&quot; 。
 * 	你手中的球不会超过5个，输入的数据中代表这些球的字符串的名字是 &quot;hand&quot;。
 * 	输入的两个字符串均为非空字符串，且只包含字符 &#39;R&#39;,&#39;Y&#39;,&#39;B&#39;,&#39;G&#39;,&#39;W&#39;。
 * 
 * 
 *
 */