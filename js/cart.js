$(document).ready(function () {
    const endPoint = "http://ecommerce.reworkstaging.name.ng/v2";
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add to Cart
    $(document).on('click', '.jproduct_addCart', function (e) {
        const productId = $(this).data('product-id');
        const product = { 
            id: productId, 
            name: "Men's Tree Runners", 
            price: 98, 
            quantity: 1,
            size: 8 
        };

        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
    });

    // Remove from Cart
    $(document).on('click', '.delete_cart_item', function (e) {
        const productId = $(this).data('product-id');
        const productIndex = cart.findIndex(item => item.id === productId);
        if (productIndex > -1) {
            cart.splice(productIndex, 1);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
    });

    // Increase quantity
    $(document).on('click', '#increaseBtn', function (e) {
        const productId = $(this).closest('.j_cart_item').find('.delete_cart_item').data('product-id');
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            existingProduct.quantity += 1;
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
    });

    // Decrease quantity
    $(document).on('click', '#decreaseBtn', function (e) {
        const productId = $(this).closest('.j_cart_item').find('.delete_cart_item').data('product-id');
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct && existingProduct.quantity > 1) {
            existingProduct.quantity -= 1;
        } else {
            const productIndex = cart.findIndex(item => item.id === productId);
            if (productIndex > -1) {
                cart.splice(productIndex, 1);
            }
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
    });

    // Update Cart UI
    function updateCartUI() {
        const cartItemsContainer = $('.j_cart_top');
        const cartEmptyContainer = $('.j_cart_empty');
        const cartDownContainer = $('.j_cart_down');
        cartItemsContainer.empty();

        if (cart.length === 0) {
            cartEmptyContainer.show();
            cartDownContainer.hide();
        } else {
            cartEmptyContainer.hide();
            cartDownContainer.show();
            
            cart.forEach(item => {
                const cartItem = `
                    <div class="j_cart_item">
                        <div class="j_cart_img">
                            <img style="height: 100%; width: 100%;" src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_107,f_auto,q_auto/https://cdn.shopify.com/s/files/1/1104/4168/files/TR3MJBW080_SHOE_ANGLE_GLOBAL_MENS_TREE_RUNNER_JET_BLACK_WHITE.png?v=1717710541" alt="">
                        </div>
                        <div class="j_cart_title">
                            <div style="display: flex; justify-content: space-between;">
                                <div>
                                    <h4>${item.name}</h4>
                                    <p class="des">Jet Black (White Sole)</p>
                                    <p class="des">Size: ${item.size}</p>
                                </div>
                                <div>
                                    <img class="delete_cart_item" data-product-id="${item.id}" style="height: 10px; cursor: pointer;" src="./images/icons/close (1).png" alt="">
                                </div>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div class="j_cart_quantity">
                                    <button id="decreaseBtn">
                                        <img src="./images/icons/remove.png" alt="" style="height: 10px;">
                                    </button>
                                    <p id="counter" class="j_quantity_count">${item.quantity}</p>
                                    <button id="increaseBtn">
                                        <img src="./images/icons/plus.png" alt="" style="height: 10px;">
                                    </button>
                                </div>
                                <div class="j_cart_price">
                                    <p>$${item.price * item.quantity}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                cartItemsContainer.append(cartItem);
            });

            let cartCheckoutContainer = $('.j_cart_total');
            cartCheckoutContainer.empty();  
            let subtotal = 0;
            cart.forEach(item => {
                subtotal += item.price * item.quantity;
            });

            cartCheckoutContainer.append(`
                <div>
                    <p><b>Subtotal</b></p>
                    <p>$${subtotal}</p>
                </div>
                <div>
                    <p><b>Shipping</b></p>
                    <p>FREE</p>
                </div>
            `);
        }

        $('.j_count').text(cart.length);
    }

    // Initial load
    updateCartUI();
});
