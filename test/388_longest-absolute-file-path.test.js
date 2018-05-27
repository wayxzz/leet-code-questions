/*
 *
 * 假设我们以下述方式将我们的文件系统抽象成一个字符串:
 * 
 * 字符串&nbsp;&quot;dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext&quot; 表示:
 * 
 * 
 * dir
 *     subdir1
 *     subdir2
 *         file.ext
 * 
 * 
 * 目录&nbsp;dir 包含一个空的子目录&nbsp;subdir1 和一个包含一个文件&nbsp;file.ext&nbsp;的子目录&nbsp;subdir2 。
 * 
 * 字符串&nbsp;&quot;dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext&quot; 表示:
 * 
 * 
 * dir
 *     subdir1
 *         file1.ext
 *         subsubdir1
 *     subdir2
 *         subsubdir2
 *             file2.ext
 * 
 * 
 * 目录&nbsp;dir 包含两个子目录 subdir1 和&nbsp;subdir2。&nbsp;subdir1 包含一个文件&nbsp;file1.ext 和一个空的二级子目录 subsubdir1。subdir2 包含一个二级子目录&nbsp;subsubdir2 ，其中包含一个文件&nbsp;file2.ext。
 * 
 * 我们致力于寻找我们文件系统中文件的最长 (按字符的数量统计) 绝对路径。例如，在上述的第二个例子中，最长路径为&nbsp;&quot;dir/subdir2/subsubdir2/file2.ext&quot;，其长度为&nbsp;32 (不包含双引号)。
 * 
 * 给定一个以上述格式表示文件系统的字符串，返回文件系统中文件的最长绝对路径的长度。 如果系统中没有文件，返回&nbsp;0。
 * 
 * 说明:
 * 
 * 
 * 	文件名至少存在一个&nbsp;. 和一个扩展名。
 * 	目录或者子目录的名字不能包含&nbsp;.。
 * 
 * 
 * 要求时间复杂度为&nbsp;O(n)&nbsp;，其中&nbsp;n 是输入字符串的大小。
 * 
 * 请注意，如果存在路径&nbsp;aaaaaaaaaaaaaaaaaaaaa/sth.png&nbsp;的话，那么&nbsp;&nbsp;a/aa/aaa/file1.txt&nbsp;就不是一个最长的路径。
 * 
 *
 */