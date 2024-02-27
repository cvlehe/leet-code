function maxProfit(prices: number[]): number {
    let lowest: number;
    let profit = 0;

    for(let i = 0; i < prices.length; i++) {
        const price = prices[i];
        if (lowest === undefined || price < lowest) {
            lowest = price;
        }
        const diff = price - lowest;
        if (diff > profit) profit = diff;
    }
    return profit;
};