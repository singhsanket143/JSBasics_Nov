/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let currMin = prices[0]; // atleast buy on day 0
    let profit = 0;
    for(let i = 1; i < prices.length; i++) {
        // can I sell ? 
        if(prices[i] > currMin) {
            // you can sell, but check is it better than prev profit ? 
            profit = Math.max(profit, prices[i] - currMin);
        }
        // can I buy ? 
        if(prices[i] < currMin) {
            currMin = prices[i];
        }
    }
    return profit;
};