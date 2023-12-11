document.addEventListener("DOMContentLoaded", function () {
    const orderItems = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');

    // Retrieve cart items from localStorage (you might need to adjust this based on your actual implementation)
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Display cart items on the order summary page
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price.toFixed(2)}DT`;
        orderItems.appendChild(li);
    });

    // Calculate and display the total order amount
    const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
    orderTotal.textContent = `Total de la Commande: ${totalAmount.toFixed(2)}DT`;
});
