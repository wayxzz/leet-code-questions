/*
 *
 * Trips&nbsp;表中存所有出租车的行程信息。每段行程有唯一健 Id，Client_Id 和&nbsp;Driver_Id 是&nbsp;Users&nbsp;表中 Users_Id 的外键。Status 是枚举类型，枚举成员为 (&lsquo;completed&rsquo;, &lsquo;cancelled_by_driver&rsquo;, &lsquo;cancelled_by_client&rsquo;)。
 * 
 * +----+-----------+-----------+---------+--------------------+----------+
 * | Id | Client_Id | Driver_Id | City_Id |        Status      |Request_at|
 * +----+-----------+-----------+---------+--------------------+----------+
 * | 1  |     1     |    10     |    1    |     completed      |2013-10-01|
 * | 2  |     2     |    11     |    1    | cancelled_by_driver|2013-10-01|
 * | 3  |     3     |    12     |    6    |     completed      |2013-10-01|
 * | 4  |     4     |    13     |    6    | cancelled_by_client|2013-10-01|
 * | 5  |     1     |    10     |    1    |     completed      |2013-10-02|
 * | 6  |     2     |    11     |    6    |     completed      |2013-10-02|
 * | 7  |     3     |    12     |    6    |     completed      |2013-10-02|
 * | 8  |     2     |    12     |    12   |     completed      |2013-10-03|
 * | 9  |     3     |    10     |    12   |     completed      |2013-10-03| 
 * | 10 |     4     |    13     |    12   | cancelled_by_driver|2013-10-03|
 * +----+-----------+-----------+---------+--------------------+----------+
 * 
 * 
 * Users&nbsp;表存所有用户。每个用户有唯一键 Users_Id。Banned 表示这个用户是否被禁止，Role 则是一个表示（&lsquo;client&rsquo;, &lsquo;driver&rsquo;, &lsquo;partner&rsquo;）的枚举类型。
 * 
 * +----------+--------+--------+
 * | Users_Id | Banned |  Role  |
 * +----------+--------+--------+
 * |    1     |   No   | client |
 * |    2     |   Yes  | client |
 * |    3     |   No   | client |
 * |    4     |   No   | client |
 * |    10    |   No   | driver |
 * |    11    |   No   | driver |
 * |    12    |   No   | driver |
 * |    13    |   No   | driver |
 * +----------+--------+--------+
 * 
 * 
 * 写一段 SQL 语句查出&nbsp;2013年10月1日&nbsp;至&nbsp;2013年10月3日&nbsp;期间非禁止用户的取消率。基于上表，你的 SQL 语句应返回如下结果，取消率（Cancellation Rate）保留两位小数。
 * 
 * +------------+-------------------+
 * |     Day    | Cancellation Rate |
 * +------------+-------------------+
 * | 2013-10-01 |       0.33        |
 * | 2013-10-02 |       0.00        |
 * | 2013-10-03 |       0.50        |
 * +------------+-------------------+
 * 
 * 
 * 致谢:
 * 非常感谢&nbsp;@cak1erlizhou&nbsp;详细的提供了这道题和相应的测试用例。
 * 
 *
 */