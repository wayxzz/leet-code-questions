/*
 *
 * 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。
 * 
 * 请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列/反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且这个字符串可以被反序列化得到一个原始的树结构。
 * 
 * 示例:&nbsp;
 * 
 * 你可以将以下二叉树：
 * 
 *     1
 *    / \
 *   2   3
 *      / \
 *     4   5
 * 
 * 序列化为 &quot;[1,2,3,null,null,4,5]&quot;
 * 
 * 提示:&nbsp;这与LeetCode目前使用的方式一致，详情请参阅&nbsp;how LeetCode OJ serializes a binary tree。你并非必须采取这种方式，你也可以创造性的用其他的方式解决这个问题。
 * 
 * 说明:&nbsp;不要使用类的成员/全局/静态变量来存储状态机，你的序列化和反序列化算法应该是无状态机的。
 * 
 *
 */