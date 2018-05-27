/*
 *
 * 有&nbsp;N&nbsp;个网络节点，标记为&nbsp;1&nbsp;到&nbsp;N。
 * 
 * 给定一个列表&nbsp;times，表示信号经过有向边的传递时间。&nbsp;times[i] = (u, v, w)，其中&nbsp;u&nbsp;是源节点，v&nbsp;是目标节点， w&nbsp;是一个信号从源节点传递到目标节点的时间。
 * 
 * 现在，我们向当前的节点&nbsp;K&nbsp;发送了一个信号。需要多久才能使所有节点都收到信号？如果不能使所有节点收到信号，返回&nbsp;-1。
 * 
 * 注意:
 * 
 * 
 * 	N&nbsp;的范围在&nbsp;[1, 100]&nbsp;之间。
 * 	K&nbsp;的范围在&nbsp;[1, N]&nbsp;之间。
 * 	times&nbsp;的长度在&nbsp;[1, 6000]&nbsp;之间。
 * 	所有的边&nbsp;times[i] = (u, v, w)&nbsp;都有&nbsp;1 &lt;= u, v &lt;= N&nbsp;且&nbsp;1 &lt;= w &lt;= 100。
 * 
 * 
 *
 */