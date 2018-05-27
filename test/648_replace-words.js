/*
 *
 * 在英语中，我们有一个叫做&nbsp;词根(root)的概念，它可以跟着其他一些词组成另一个较长的单词&mdash;&mdash;我们称这个词为&nbsp;继承词(successor)。例如，词根an，跟随着单词&nbsp;other(其他)，可以形成新的单词&nbsp;another(另一个)。
 * 
 * 现在，给定一个由许多词根组成的词典和一个句子。你需要将句子中的所有继承词用词根替换掉。如果继承词有许多可以形成它的词根，则用最短的词根替换它。
 * 
 * 你需要输出替换之后的句子。
 * 
 * 示例 1:
 * 
 * 
 * 输入: dict(词典) = [&quot;cat&quot;, &quot;bat&quot;, &quot;rat&quot;]
 * sentence(句子) = &quot;the cattle was rattled by the battery&quot;
 * 输出: &quot;the cat was rat by the bat&quot;
 * 
 * 
 * 注:
 * 
 * 
 * 	输入只包含小写字母。
 * 	1 &lt;= 字典单词数 &lt;=1000
 * 	1 &lt;=&nbsp; 句中词语数&nbsp;&lt;= 1000
 * 	1 &lt;= 词根长度 &lt;= 100
 * 	1 &lt;= 句中词语长度&nbsp;&lt;= 1000
 * 
 * 
 *
 */