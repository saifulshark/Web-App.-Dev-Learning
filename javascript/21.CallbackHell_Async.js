const cart = { "shoes": 1, "tshirt": 2, "jeans": 3 };

createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentStatus) {
        showOrderSummary(paymentStatus, function (summary) {
            console.log(summary);
            updateBalance(summary, function (balance) {
                console.log(balance);
            }
        })
    })
});
//callback hell is this,there is multiple nested callback functions  which makes the code difficult to read and maintain and makes callback hell
