/*
 *
 * 给定一个整数数组&nbsp;prices，其中第&nbsp;i&nbsp;个元素代表了第&nbsp;i&nbsp;天的股票价格 ；非负整数&nbsp;fee 代表了交易股票的手续费用。
 * 
 * 你可以无限次地完成交易，但是你每次交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
 * 
 * 返回获得利润的最大值。
 * 
 * 示例 1:
 * 
 * 输入: prices = [1, 3, 2, 8, 4, 9], fee = 2
 * 输出: 8
 * 解释: 能够达到的最大利润:  
 * 在此处买入&nbsp;prices[0] = 1
 * 在此处卖出 prices[3] = 8
 * 在此处买入 prices[4] = 4
 * 在此处卖出 prices[5] = 9
 * 总利润:&nbsp;((8 - 1) - 2) + ((9 - 4) - 2) = 8.
 * 
 * 注意:
 * 
 * 
 * 	0 &lt; prices.length &lt;= 50000.
 * 	0 &lt; prices[i] &lt; 50000.
 * 	0 &lt;= fee &lt; 50000.
 * 
 * 
 *
 */