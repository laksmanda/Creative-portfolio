// js/store-script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Halaman Toko & Jasa dimuat.');

    let cartItemCount = 0;
    const cartCountElement = document.getElementById('cartCountStore');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    // Load initial cart count from localStorage if available
    if (localStorage.getItem('cartCount')) {
        cartItemCount = parseInt(localStorage.getItem('cartCount'));
        if (cartCountElement) {
            cartCountElement.textContent = cartItemCount;
        }
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartItemCount++;
            if (cartCountElement) {
                cartCountElement.textContent = cartItemCount;
            }
            localStorage.setItem('cartCount', cartItemCount); // Save to localStorage

            const productId = this.dataset.productId;
            alert(`Produk ${productId} berhasil ditambahkan ke keranjang! Total item: ${cartItemCount}`);
            // Di aplikasi nyata, Anda akan menambahkan item ke array keranjang yang lebih kompleks
            // dan menyimpan detail produk, harga, dll.
        });
    });

    // Add more store specific JavaScript here, e.g., product detail modals, checkout simulation
});