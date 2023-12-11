// script.js
function addProduct() {
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);

    // Valider les données (ajoutez ici toute validation supplémentaire si nécessaire)

    // Récupérer les produits existants depuis le stockage local
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];

    // Ajouter le nouveau produit à la liste
    const newProduct = {
        name: productName,
        description: productDescription,
        price: productPrice
    };
    existingProducts.push(newProduct);

    // Enregistrer la liste mise à jour dans le stockage local
    localStorage.setItem('products', JSON.stringify(existingProducts));

    alert('Nouvel article ajouté avec succès !');
}
