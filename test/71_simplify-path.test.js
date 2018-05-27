/*
 *
 * 给定一个文档 (Unix-style) 的完全路径，请进行路径简化。
 * 
 * 例如，
 * path = &quot;/home/&quot;, =&gt; &quot;/home&quot;
 * path = &quot;/a/./b/../../c/&quot;, =&gt; &quot;/c&quot;
 * 
 * 边界情况:
 * 
 * 
 * 	你是否考虑了 路径 =&nbsp;&quot;/../&quot;&nbsp;的情况？
 * 	在这种情况下，你需返回&nbsp;&quot;/&quot;&nbsp;。
 * 	此外，路径中也可能包含多个斜杠&nbsp;&#39;/&#39;&nbsp;，如&nbsp;&quot;/home//foo/&quot;&nbsp;。
 * 	在这种情况下，你可忽略多余的斜杠，返回&nbsp;&quot;/home/foo&quot;&nbsp;。
 * 
 * 
 *
 */