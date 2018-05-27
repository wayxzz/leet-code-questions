/*
 *
 * 给定一个迭代器类的接口，接口包含两个方法：&nbsp;next()&nbsp;和&nbsp;hasNext()。设计并实现一个支持&nbsp;peek()&nbsp;操作的顶端迭代器 -- 其本质就是把原本应由&nbsp;next()&nbsp;方法返回的元素&nbsp;peek()&nbsp;出来。
 * 
 * 示例:
 * 
 * 假设迭代器被初始化为列表&nbsp;[1,2,3]。
 * 
 * 调用&nbsp;next()返回 1，得到列表中的第一个元素。
 * 现在调用&nbsp;peek()&nbsp;返回 2，下一个元素。在此之后调用&nbsp;next() 仍然返回 2。
 * 最后一次调用&nbsp;next()&nbsp;返回 3，末尾元素。在此之后调用&nbsp;hasNext()&nbsp;应该返回 false。
 * 
 * 
 * 进阶：你将如何拓展你的设计？使之变得通用化，从而适应所有的类型，而不只是整数型？
 * 
 *
 */