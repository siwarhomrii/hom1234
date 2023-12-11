
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const checkoutForm = document.getElementById('checkout-form');

    // Récupérer le panier depuis localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Afficher le panier actuel au chargement de la page
    updateCartUI();

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    checkoutForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Enregistrer le panier dans localStorage avant de passer à la page de validation de la commande
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.href = 'checkout.html';
    });

    function addToCart(event) {
        const product = event.target.parentNode;
        const productName = product.querySelector('h2').innerText;
        const productPrice = parseFloat(product.dataset.price);

        // Ajouter le produit au panier
        cart.push({ name: productName, price: productPrice });

        // Mettre à jour l'interface utilisateur
        updateCartUI();

        // Mettre à jour le total
        updateTotal();

        // Enregistrer le panier dans localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function removeCartItem(index) {
        // Supprimer l'élément du panier en fonction de l'index
        cart.splice(index, 1);

        // Mettre à jour l'interface utilisateur
        updateCartUI();

        // Mettre à jour le total
        updateTotal();

        // Enregistrer le panier dans localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function updateCartUI() {
        // Vider le contenu actuel du panier
        cartItems.innerHTML = '';

        // Afficher chaque élément du panier avec un bouton de suppression
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price.toFixed(2)}DT`;
            
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Supprimer';
            removeButton.addEventListener('click', () => removeCartItem(index));

            li.appendChild(removeButton);
            cartItems.appendChild(li);
        });
    }

    function updateTotal() {
        const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
        totalElement.textContent = `Total: ${totalAmount.toFixed(2)}DT`;
    }
});

$