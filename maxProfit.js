function maxProfit(prices) {
  let cheapest = prices[0];
  let bestProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];
    const profit = currentPrice - cheapest;

    if (profit > bestProfit) {
      bestProfit = profit;
    }

    if (currentPrice < cheapest) {
      cheapest = currentPrice;
    }
  }

  return bestProfit;
}

function maxProfit2(prices) {
  let cheapest = prices[0];
  let bestProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];
    const profit = currentPrice - cheapest;

    if (profit > bestProfit) {
      bestProfit = profit;
    }

    if (currentPrice < cheapest) {
      cheapest = currentPrice;
    }
  }
  return bestProfit;
}

console.log(maxProfit2([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit2([7, 6, 4, 3, 1]));
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
