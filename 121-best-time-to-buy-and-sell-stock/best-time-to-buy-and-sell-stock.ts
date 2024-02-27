function maxProfit(prices: number[]): number {
    let lowest = Number.MAX_VALUE;
    let profit = 0;

    for(let i = 0; i < prices.length; i++) {
        const price = prices[i];
        if (price < lowest) {
            lowest = price;
        }
        const diff = price - lowest;
        if (diff > profit) profit = diff;
    }
    return profit;
};