// ============================================
// LOGIN & AUTHENTICATION
// ============================================

function showLoginModal() {
    const modal = document.getElementById('loginModal');
    if (!modal) {
        const modalHTML = `
            <div id="loginModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); z-index: 1000; display: flex; align-items: center; justify-content: center;">
                <div style="background-color: white; padding: 2rem; border-radius: 0.5rem; max-width: 400px; width: 90%;">
                    <h2 style="margin-bottom: 1rem; font-family: 'Playfair Display', serif;">Login to Novex</h2>
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Email</label>
                        <input type="email" id="loginEmail" placeholder="your@email.com" style="width: 100%; padding: 0.75rem; border: 1px solid #e8e6e3; border-radius: 0.25rem;">
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Password</label>
                        <input type="password" id="loginPassword" placeholder="••••••••" style="width: 100%; padding: 0.75rem; border: 1px solid #e8e6e3; border-radius: 0.25rem;">
                    </div>
                    <button onclick="handleLogin()" style="width: 100%; padding: 0.75rem; background-color: #d4af37; color: white; border: none; border-radius: 0.25rem; cursor: pointer; font-weight: 600; margin-bottom: 0.5rem;">Sign In</button>
                    <button onclick="closeLoginModal()" style="width: 100%; padding: 0.75rem; background-color: #e8e6e3; color: #1a1a1a; border: none; border-radius: 0.25rem; cursor: pointer; font-weight: 600;">Close</button>
                    <p style="text-align: center; margin-top: 1rem; color: #6b6b6b; font-size: 0.875rem;">Demo: demo@novex.com / demo123</p>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    document.getElementById('loginModal').style.display = 'flex';
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) modal.style.display = 'none';
}

function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email === 'demo@novex.com' && password === 'demo123') {
        localStorage.setItem('novex-user', JSON.stringify({email, name: 'Demo User'}));
        alert('Login successful!');
        closeLoginModal();
        location.reload();
    } else {
        alert('Invalid credentials. Use demo@novex.com / demo123');
    }
}

// ============================================
// DATA & PRODUCT SYSTEM
// ============================================

const products = [
    {
        id: "1",
        name: "Aurora Chronograph",
        category: "Wristwatch",
        price: 1299,
        originalPrice: 1599,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663720080937/eS5MajpJGQooJZDyxSViwn/featured-watch-1-b3mu8DYypSwpKHtEKMkYRK.webp",
        badge: "-19%",
        rating: 4.8,
        reviews: 234
    },
    {
        id: "2",
        name: "Elegance Dress Watch",
        category: "Wristwatch",
        price: 899,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663720080937/eS5MajpJGQooJZDyxSViwn/featured-watch-2-jXDRs6q9PthtrMqSr6wKKz.webp",
        badge: "NEW",
        rating: 4.9,
        reviews: 156
    },
    {
        id: "3",
        name: "Luxora Desk Clock",
        category: "Clock",
        price: 449,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663720080937/eS5MajpJGQooJZDyxSViwn/featured-clock-1-kPMvqD6cgWmBdyLQYN7C7Z.webp",
        badge: "BESTSELLER",
        rating: 4.7,
        reviews: 321
    },
    {
        id: "4",
        name: "Heritage Mechanical",
        category: "Wristwatch",
        price: 1699,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663720080937/eS5MajpJGQooJZDyxSViwn/featured-watch-1-b3mu8DYypSwpKHtEKMkYRK.webp",
        badge: "LUXURY",
        rating: 4.9,
        reviews: 89
    },
    {
        id: "5",
        name: "Urban Chronograph",
        category: "Wristwatch",
        price: 799,
        originalPrice: 999,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663720080937/eS5MajpJGQooJZDyxSViwn/featured-watch-2-jXDRs6q9PthtrMqSr6wKKz.webp",
        badge: "-20%",
        rating: 4.6,
        reviews: 412
    },
    {
        id: "6",
        name: "Classic Wall Clock",
        category: "Clock",
        price: 299,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663720080937/eS5MajpJGQooJZDyxSViwn/hero-wall-clock-CzDJfgTodpEmudLMJRipYe.webp",
        rating: 4.5,
        reviews: 203
    },
    {
        id: "7",
        name: "Premium Leather Strap",
        category: "Accessories",
        price: 149,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663720080937/eS5MajpJGQooJZDyxSViwn/featured-watch-1-b3mu8DYypSwpKHtEKMkYRK.webp",
        rating: 4.8,
        reviews: 98
    },
    {
        id: "8",
        name: "Minimalist Watch",
        category: "Wristwatch",
        price: 599,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663720080937/eS5MajpJGQooJZDyxSViwn/featured-watch-2-jXDRs6q9PthtrMqSr6wKKz.webp",
        badge: "NEW",
        rating: 4.7,
        reviews: 167
    },
    {
        id: "9",
        name: "Vintage Pocket Watch",
        category: "Wristwatch",
        price: 1499,
        originalPrice: 1799,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663720080937/eS5MajpJGQooJZDyxSViwn/featured-watch-1-b3mu8DYypSwpKHtEKMkYRK.webp",
        badge: "-17%",
        rating: 4.9,
        reviews: 245
    },
    {
        id: "10",
        name: "Modern Desk Clock",
        category: "Clock",
        price: 399,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663720080937/eS5MajpJGQooJZDyxSViwn/featured-clock-1-kPMvqD6cgWmBdyLQYN7C7Z.webp",
        badge: "NEW",
        rating: 4.6,
        reviews: 134
    }
];

let cart = [];
let favorites = []; 
let filteredProducts = [...products];

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    if (filteredProducts.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--muted-foreground);">No products found matching your search!</div>`;
        return;
    }

    grid.innerHTML = filteredProducts.map(product => {
        const isFav = favorites.includes(product.id);
        return `
            <div class="product-card relative">
                <div onclick="openProductModal('${product.id}')" style="cursor: pointer;">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                </div>
                
                <button class="card-favorite-btn" onclick="toggleFavorite('${product.id}')" title="Save to Favorites">
                    ${isFav ? '❤️' : '🤍'}
                </button>

                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <div class="product-title" onclick="openProductModal('${product.id}')" style="cursor: pointer;">${product.name}</div>
                    <div class="product-rating">★ ${product.rating} (${product.reviews})</div>
                    <div class="product-price">
                        $${product.price}
                        ${product.originalPrice ? `<span class="original">$${product.originalPrice}</span>` : ''}
                    </div>
                    <button class="btn btn-primary" style="width: 100%;" onclick="addToCart('${product.id}')">Add to Cart</button>
                </div>
            </div>
        `;
    }).join('');
}

function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(productId);
    }
    localStorage.setItem('novex-favorites', JSON.stringify(favorites));
    updateFavoriteBadge();
    renderProducts();
    
    if(document.getElementById('favoriteModal').style.display === 'flex') {
        renderFavoriteModalContents();
    }
}

function updateFavoriteBadge() {
    const badge = document.getElementById('favoriteBadge');
    if (badge) {
        badge.textContent = favorites.length;
        badge.style.display = favorites.length > 0 ? 'flex' : 'none';
    }
}

// មុខងារស្វែងរកផលិតផល (Search Feature)
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const titleElement = document.getElementById('productsTitle');
    
    if (query === "") {
        filteredProducts = [...products];
        if(titleElement) titleElement.textContent = "Exceptional Timepieces";
    } else {
        filteredProducts = products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.category.toLowerCase().includes(query)
        );
        if(titleElement) titleElement.textContent = `Search Results for "${query}"`;
    }
    renderProducts();
}

// Category Filter Feature
function filterByCategory(category) {
    filteredProducts = products.filter(p => p.category === category);
    document.getElementById('productsLabel').textContent = category.toUpperCase();
    document.getElementById('productsTitle').textContent = `${category} Collection`;
    renderProducts();
    document.getElementById('featured-products-section').scrollIntoView({behavior: 'smooth'});
}

function resetProductFilter() {
    document.getElementById('searchInput').value = "";
    filteredProducts = [...products];
    document.getElementById('productsLabel').textContent = "FEATURED COLLECTION";
    document.getElementById('productsTitle').textContent = "Exceptional Timepieces";
    renderProducts();
}

// Product Detail Modal Popup
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modalBody = document.getElementById('customModalBody');
    modalBody.innerHTML = `
        <div class="modal-detail-grid">
            <div class="modal-detail-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-detail-info">
                <span class="modal-detail-cat">${product.category}</span>
                <h2>${product.name}</h2>
                <div class="product-rating" style="margin: 0.5rem 0;">★ ${product.rating} (${product.reviews} reviews)</div>
                <div class="modal-detail-price">
                    $${product.price} 
                    ${product.originalPrice ? `<span class="modal-detail-orig">$${product.originalPrice}</span>` : ''}
                </div>
                <p class="modal-detail-desc">Experience the pinnacle of luxury with Novex timepieces. Crafted with precision engineering, scratch-resistant sapphire crystal, and superior water resistance for timeless elegance.</p>
                <button class="btn btn-primary" style="width:100%; padding:0.85rem;" onclick="addToCart('${product.id}'); closeProductModal();">Add to Cart 🛒</button>
            </div>
        </div>
    `;
    document.getElementById('productDetailModal').style.display = 'flex';
}

function closeProductModal() {
    document.getElementById('productDetailModal').style.display = 'none';
}

// ============================================
// FAVORITES (WISHLIST) MODAL MANAGEMENT
// ============================================

function showFavoriteModal() {
    document.getElementById('favoriteModal').style.display = 'flex';
    renderFavoriteModalContents();
}

function closeFavoriteModal() {
    document.getElementById('favoriteModal').style.display = 'none';
}

function renderFavoriteModalContents() {
    const body = document.getElementById('favoriteModalBody');
    if (!body) return;

    if (favorites.length === 0) {
        body.innerHTML = `<p style="color: var(--muted-foreground); text-align: center; padding: 2rem 0;">Your favorites list is empty.</p>`;
        return;
    }

    let html = `<div style="max-height: 300px; overflow-y: auto; margin-bottom: 1.5rem;">`;
    
    favorites.forEach(favId => {
        const item = products.find(p => p.id === favId);
        if(!item) return;
        
        html += `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 0; border-bottom: 1px solid var(--border);">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <img src="${item.image}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 0.25rem;">
                    <div>
                        <h4 style="font-size: 0.95rem; margin: 0;">${item.name}</h4>
                        <span style="font-size: 0.85rem; color: var(--primary); font-weight: 600;">$${item.price}</span>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <button onclick="addToCart('${item.id}'); toggleFavorite('${item.id}');" class="btn btn-primary" style="padding: 0.35rem 0.75rem; font-size: 0.8rem;">+ Cart</button>
                    <button onclick="toggleFavorite('${item.id}')" style="background: none; border: none; font-size: 1.1rem; cursor: pointer; padding: 0 0.5rem;">✕</button>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    body.innerHTML = html;
}

// ============================================
// SHOPPING CART CORE SYSTEM
// ============================================

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({...product, quantity: 1});
    }
    updateCartBadge();
    if(document.getElementById('cartModal').style.display === 'flex') {
        renderCartModalContents();
    }
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
        badge.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        badge.style.display = cart.length > 0 ? 'flex' : 'none';
    }
}

function showCartModal() {
    document.getElementById('cartModal').style.display = 'flex';
    renderCartModalContents();
}

function closeCartModal() {
    document.getElementById('cartModal').style.display = 'none';
}

function changeQuantity(productId, amount) {
    const item = cart.find(p => p.id === productId);
    if (!item) return;
    item.quantity += amount;
    if (item.quantity <= 0) {
        cart = cart.filter(p => p.id !== productId);
    }
    updateCartBadge();
    renderCartModalContents();
}

function renderCartModalContents() {
    const body = document.getElementById('cartModalBody');
    if (!body) return;

    if (cart.length === 0) {
        body.innerHTML = `<p style="color: var(--muted-foreground); text-align: center; padding: 2rem 0;">Your cart is empty.</p>`;
        return;
    }

    let total = 0;
    let html = `<div style="max-height: 300px; overflow-y: auto; margin-bottom: 1.5rem;">`;
    
    cart.forEach(item => {
        let subtotal = item.price * item.quantity;
        total += subtotal;
        html += `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 0; border-bottom: 1px solid var(--border);">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <img src="${item.image}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 0.25rem;">
                    <div>
                        <h4 style="font-size: 0.95rem; margin: 0;">${item.name}</h4>
                        <span style="font-size: 0.85rem; color: var(--primary); font-weight: 600;">$${item.price}</span>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <button onclick="changeQuantity('${item.id}', -1)" style="border: 1px solid var(--border); background: none; width: 24px; height: 24px; cursor: pointer; border-radius: 0.25rem;">-</button>
                    <span style="font-size: 0.9rem; font-weight: 600;">${item.quantity}</span>
                    <button onclick="changeQuantity('${item.id}', 1)" style="border: 1px solid var(--border); background: none; width: 24px; height: 24px; cursor: pointer; border-radius: 0.25rem;">+</button>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    html += `
        <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 1.1rem; margin-bottom: 1.5rem; padding-top: 0.5rem;">
            <span>Total Amount:</span>
            <span style="color: var(--primary);">$${total}</span>
        </div>
        <button onclick="checkoutCart()" class="btn btn-primary" style="width: 100%; padding: 0.85rem;">Proceed to Checkout</button>
    `;
    body.innerHTML = html;
}

function checkoutCart() {
    alert("Thank you for your order! This demo checkout process is successful.");
    cart = [];
    updateCartBadge();
    closeCartModal();
}

// Initialize components system setup on ready
renderProducts();
updateFavoriteBadge();