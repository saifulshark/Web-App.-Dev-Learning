
// function calculateTotalSpentByCategory(transactions) {
//     const totals = {}; // Use an object to keep track of total spent for each category
  
//     // Loop through the transactions one by one
//     for (let i = 0; i < transactions.length; i++) {
//       const transaction = transactions[i]; // Get the current transaction
//       const category = transaction.category; // Get the category of this transaction
//       const price = transaction.price; // Get the price of this transaction
  
//       // If the category is not in the totals, initialize it with 0
//       if (!totals[category]) {
//         totals[category] = 0;
//       }
  
//       // Add the price to the total for this category
//       totals[category] += price;
//     }
  
//     // Prepare the result as an array of objects here
//     const result = [];
//     for (let category in totals) {
//       result.push({ category: category, totalSpent: totals[category] });
//     }
  
//     return result;
//   }
  
//   // Example usage
//   const transactions = [
//     { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
//     { id: 2, timestamp: 1656076900000, price: 15, category: 'Food', itemName: 'Burger' },
//     { id: 3, timestamp: 1656077000000, price: 20, category: 'Clothing', itemName: 'T-Shirt' },
//     { id: 4, timestamp: 1656077100000, price: 5, category: 'Food', itemName: 'Soda' },
//   ];
  
//   console.log(calculateTotalSpentByCategory(transactions));
//   // Output: [
//   //   { category: 'Food', totalSpent: 30 },
//   //   { category: 'Clothing', totalSpent: 20 }
//   // ]
  