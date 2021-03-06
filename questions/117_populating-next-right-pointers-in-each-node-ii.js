/*
 *
 * 给定一个二叉树
 * 
 * struct TreeLinkNode {
 *   TreeLinkNode *left;
 *   TreeLinkNode *right;
 *   TreeLinkNode *next;
 * }
 * 
 * 
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 * 
 * 初始状态下，所有&nbsp;next 指针都被设置为 NULL。
 * 
 * 说明:
 * 
 * 
 * 	你只能使用额外常数空间。
 * 	使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
 * 
 * 
 * 示例:
 * 
 * 给定二叉树，
 * 
 *      1
 *    /  \
 *   2    3
 *  / \    \
 * 4   5    7
 * 
 * 
 * 调用你的函数后，该二叉树变为：
 * 
 *      1 -&gt; NULL
 *    /  \
 *   2 -&gt; 3 -&gt; NULL
 *  / \    \
 * 4-&gt; 5 -&gt; 7 -&gt; NULL
 * 
 *
 */