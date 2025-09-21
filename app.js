// Contract ABI - Replace with your deployed contract ABI
const CONTRACT_ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "productId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
            }
        ],
        "name": "AddedToCart",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "CartCleared",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            }
        ],
        "name": "OrderCompleted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalAmount",
                "type": "uint256"
            }
        ],
        "name": "OrderPlaced",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "productId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "stock",
                "type": "uint256"
            }
        ],
        "name": "ProductAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "productId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "stock",
                "type": "uint256"
            }
        ],
        "name": "ProductUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "productId",
                "type": "uint256"
            }
        ],
        "name": "RemovedFromCart",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_imageUrl",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_stock",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_category",
                "type": "string"
            }
        ],
        "name": "addProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_productId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_quantity",
                "type": "uint256"
            }
        ],
        "name": "addToCart",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "clearCart",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_productId",
                "type": "uint256"
            }
        ],
        "name": "deactivateProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllProducts",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "imageUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "stock",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "category",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "isActive",
                        "type": "bool"
                    }
                ],
                "internalType": "struct ClothingStore.Product[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getCart",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "productId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct ClothingStore.CartItem[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getCartTotal",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "total",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getContractBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_orderId",
                "type": "uint256"
            }
        ],
        "name": "getOrder",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "totalAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isCompleted",
                "type": "bool"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "productId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct ClothingStore.CartItem[]",
                "name": "items",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_productId",
                "type": "uint256"
            }
        ],
        "name": "getProduct",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "imageUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "stock",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "category",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "isActive",
                        "type": "bool"
                    }
                ],
                "internalType": "struct ClothingStore.Product",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getUserOrders",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nextOrderId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nextProductId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "orders",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "totalAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isCompleted",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "products",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "imageUrl",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "stock",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "category",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "isActive",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "purchaseCart",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_productId",
                "type": "uint256"
            }
        ],
        "name": "removeFromCart",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_productId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_imageUrl",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_stock",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_category",
                "type": "string"
            }
        ],
        "name": "updateProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_productId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_quantity",
                "type": "uint256"
            }
        ],
        "name": "updateCartQuantity",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "userCarts",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "productId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "userOrders",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawFunds",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

// Replace with your deployed contract address
const CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000000"; // You'll need to deploy and update this

// Global variables
let web3;
let contract;
let currentAccount;
let products = [];
let cart = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', async function() {
    await initializeApp();
    setupEventListeners();
    loadProducts();
});

async function initializeApp() {
    // Check if Web3 is available
    if (typeof window.ethereum !== 'undefined') {
        web3 = new Web3(window.ethereum);
        
        // For development/testing, we'll use demo mode if no contract address is set
        if (CONTRACT_ADDRESS === "0x0000000000000000000000000000000000000000") {
            showNotification('Demo mode active - Connect wallet to use blockchain features', 'info');
            loadDemoData();
        } else {
            contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        }
    } else {
        showNotification('Please install MetaMask to use this application', 'warning');
        loadDemoData();
    }
}

function loadDemoData() {
    // Demo products for when Web3 is not available
    products = [
        {
            id: 0,
            name: "Cyber Jacket",
            description: "Futuristic LED-embedded jacket with climate control",
            imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
            price: web3 ? web3.utils.toWei('0.5', 'ether') : '0.5',
            stock: 10,
            category: "Jackets",
            isActive: true
        },
        {
            id: 1,
            name: "Holo Pants",
            description: "Smart fabric pants with holographic patterns",
            imageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
            price: web3 ? web3.utils.toWei('0.3', 'ether') : '0.3',
            stock: 15,
            category: "Pants",
            isActive: true
        },
        {
            id: 2,
            name: "Neural Headset",
            description: "Brain-computer interface fashion accessory",
            imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
            price: web3 ? web3.utils.toWei('1.0', 'ether') : '1.0',
            stock: 5,
            category: "Accessories",
            isActive: true
        },
        {
            id: 3,
            name: "Quantum Sneakers",
            description: "Self-lacing shoes with anti-gravity tech",
            imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
            price: web3 ? web3.utils.toWei('0.8', 'ether') : '0.8',
            stock: 8,
            category: "Shoes",
            isActive: true
        },
        {
            id: 4,
            name: "Solar Shirt",
            description: "Energy-harvesting fabric shirt",
            imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
            price: web3 ? web3.utils.toWei('0.4', 'ether') : '0.4',
            stock: 12,
            category: "Shirts",
            isActive: true
        },
        {
            id: 5,
            name: "Plasma Goggles",
            description: "Augmented reality eyewear",
            imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
            price: web3 ? web3.utils.toWei('0.6', 'ether') : '0.6',
            stock: 7,
            category: "Accessories",
            isActive: true
        }
    ];
    displayProducts(products);
}

function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.target.dataset.section;
            showSection(section);
        });
    });

    // Wallet connection
    document.getElementById('connect-wallet').addEventListener('click', connectWallet);

    // Filter and sort
    document.getElementById('category-filter').addEventListener('change', filterProducts);
    document.getElementById('sort-options').addEventListener('change', sortProducts);

    // Cart actions
    document.getElementById('clear-cart').addEventListener('click', clearCart);
    document.getElementById('purchase-btn').addEventListener('click', purchaseCart);

    // Modal
    const modal = document.getElementById('product-modal');
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Quantity controls in modal
    document.getElementById('qty-increase').addEventListener('click', () => {
        const input = document.getElementById('modal-quantity');
        input.value = parseInt(input.value) + 1;
    });

    document.getElementById('qty-decrease').addEventListener('click', () => {
        const input = document.getElementById('modal-quantity');
        if (parseInt(input.value) > 1) {
            input.value = parseInt(input.value) - 1;
        }
    });

    document.getElementById('add-to-cart-btn').addEventListener('click', addToCartFromModal);
}

async function connectWallet() {
    try {
        if (typeof window.ethereum === 'undefined') {
            showNotification('Please install MetaMask first', 'error');
            return;
        }

        showLoading('Connecting to wallet...');

        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        });

        currentAccount = accounts[0];
        
        // Update UI
        document.getElementById('connect-wallet').style.display = 'none';
        const walletInfo = document.getElementById('wallet-info');
        walletInfo.style.display = 'block';
        
        const address = currentAccount.slice(0, 6) + '...' + currentAccount.slice(-4);
        document.getElementById('wallet-address').textContent = address;

        // Get balance
        const balance = await web3.eth.getBalance(currentAccount);
        const balanceEth = web3.utils.fromWei(balance, 'ether');
        document.getElementById('wallet-balance').textContent = `${parseFloat(balanceEth).toFixed(4)} ETH`;

        hideLoading();
        showNotification('Wallet connected successfully!', 'success');

        // Load user's cart and orders if contract is available
        if (contract) {
            await loadUserCart();
            await loadUserOrders();
        }

    } catch (error) {
        hideLoading();
        console.error('Error connecting wallet:', error);
        showNotification('Failed to connect wallet', 'error');
    }
}

async function loadProducts() {
    try {
        showLoading('Loading products...');

        if (contract) {
            const contractProducts = await contract.methods.getAllProducts().call();
            products = contractProducts.filter(p => p.isActive);
        }

        displayProducts(products);
        hideLoading();

    } catch (error) {
        console.error('Error loading products:', error);
        hideLoading();
        // Fall back to demo data if contract fails
        if (products.length === 0) {
            loadDemoData();
        }
    }
}

function displayProducts(productsToShow) {
    const grid = document.getElementById('products-grid');
    const loading = document.getElementById('loading');
    
    loading.style.display = 'none';
    grid.innerHTML = '';

    if (productsToShow.length === 0) {
        grid.innerHTML = '<div class="empty-state"><h3>No products found</h3></div>';
        return;
    }

    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card slide-up';
    
    const price = web3 ? web3.utils.fromWei(product.price.toString(), 'ether') : product.price;
    const stockClass = product.stock <= 5 ? (product.stock === 0 ? 'out-of-stock' : 'low-stock') : '';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.imageUrl}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x250?text=Image+Not+Found'">
            <div class="product-overlay">
                <button class="add-to-cart-btn" onclick="openProductModal(${product.id})">
                    View Details
                </button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-meta">
                <span class="product-category">${product.category}</span>
                <span class="product-stock ${stockClass}">
                    ${product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </span>
            </div>
            <div class="product-price">${price} ETH</div>
        </div>
    `;

    card.addEventListener('click', () => openProductModal(product.id));
    return card;
}

function openProductModal(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) return;

    const modal = document.getElementById('product-modal');
    const price = web3 ? web3.utils.fromWei(product.price.toString(), 'ether') : product.price;

    document.getElementById('modal-image').src = product.imageUrl;
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-description').textContent = product.description;
    document.getElementById('modal-category').textContent = product.category;
    document.getElementById('modal-stock').textContent = `${product.stock} in stock`;
    document.getElementById('modal-price').textContent = `${price} ETH`;
    document.getElementById('modal-quantity').value = 1;
    document.getElementById('modal-quantity').max = product.stock;

    // Store product ID for add to cart
    modal.dataset.productId = productId;

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

async function addToCartFromModal() {
    const modal = document.getElementById('product-modal');
    const productId = parseInt(modal.dataset.productId);
    const quantity = parseInt(document.getElementById('modal-quantity').value);
    
    await addToCart(productId, quantity);
    closeModal();
}

async function addToCart(productId, quantity) {
    try {
        const product = products.find(p => p.id == productId);
        if (!product) {
            showNotification('Product not found', 'error');
            return;
        }

        if (quantity > product.stock) {
            showNotification('Not enough stock available', 'error');
            return;
        }

        if (contract && currentAccount) {
            showLoading('Adding to cart...');
            await contract.methods.addToCart(productId, quantity).send({
                from: currentAccount
            });
            await loadUserCart();
        } else {
            // Demo mode - local storage
            const existingItem = cart.find(item => item.productId == productId);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({ productId, quantity });
            }
            updateCartDisplay();
            localStorage.setItem('demoCart', JSON.stringify(cart));
        }

        hideLoading();
        showNotification(`Added ${product.name} to cart!`, 'success');

    } catch (error) {
        hideLoading();
        console.error('Error adding to cart:', error);
        showNotification('Failed to add item to cart', 'error');
    }
}

async function loadUserCart() {
    try {
        if (contract && currentAccount) {
            cart = await contract.methods.getCart(currentAccount).call();
        } else {
            // Demo mode - load from local storage
            const savedCart = localStorage.getItem('demoCart');
            cart = savedCart ? JSON.parse(savedCart) : [];
        }
        updateCartDisplay();
    } catch (error) {
        console.error('Error loading cart:', error);
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartEmpty = document.getElementById('cart-empty');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');

    cartCount.textContent = cart.reduce((sum, item) => sum + parseInt(item.quantity), 0);

    if (cart.length === 0) {
        cartItems.style.display = 'none';
        cartTotal.style.display = 'none';
        cartEmpty.style.display = 'block';
        return;
    }

    cartEmpty.style.display = 'none';
    cartItems.style.display = 'block';
    cartTotal.style.display = 'block';

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id == item.productId);
        if (product) {
            const itemTotal = parseFloat(web3 ? web3.utils.fromWei(product.price.toString(), 'ether') : product.price) * item.quantity;
            total += itemTotal;

            const cartItem = createCartItem(product, item.quantity);
            cartItems.appendChild(cartItem);
        }
    });

    document.getElementById('subtotal').textContent = `${total.toFixed(4)} ETH`;
    document.getElementById('total').textContent = `${total.toFixed(4)} ETH`;
}

function createCartItem(product, quantity) {
    const item = document.createElement('div');
    item.className = 'cart-item';
    
    const price = web3 ? web3.utils.fromWei(product.price.toString(), 'ether') : product.price;
    const itemTotal = (parseFloat(price) * quantity).toFixed(4);

    item.innerHTML = `
        <div class="cart-item-image">
            <img src="${product.imageUrl}" alt="${product.name}">
        </div>
        <div class="cart-item-details">
            <h4 class="cart-item-name">${product.name}</h4>
            <p class="cart-item-price">${price} ETH each</p>
            <p class="cart-item-total">Total: ${itemTotal} ETH</p>
        </div>
        <div class="cart-item-controls">
            <div class="quantity-controls">
                <button class="qty-btn" onclick="updateQuantity(${product.id}, ${quantity - 1})">-</button>
                <input type="number" class="quantity-input" value="${quantity}" min="1" max="${product.stock}" 
                       onchange="updateQuantity(${product.id}, this.value)">
                <button class="qty-btn" onclick="updateQuantity(${product.id}, ${quantity + 1})">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${product.id})">Remove</button>
        </div>
    `;

    return item;
}

async function updateQuantity(productId, newQuantity) {
    try {
        newQuantity = parseInt(newQuantity);
        
        if (newQuantity <= 0) {
            await removeFromCart(productId);
            return;
        }

        const product = products.find(p => p.id == productId);
        if (newQuantity > product.stock) {
            showNotification('Not enough stock available', 'error');
            return;
        }

        if (contract && currentAccount) {
            showLoading('Updating quantity...');
            await contract.methods.updateCartQuantity(productId, newQuantity).send({
                from: currentAccount
            });
            await loadUserCart();
        } else {
            // Demo mode
            const item = cart.find(item => item.productId == productId);
            if (item) {
                item.quantity = newQuantity;
                updateCartDisplay();
                localStorage.setItem('demoCart', JSON.stringify(cart));
            }
        }

        hideLoading();

    } catch (error) {
        hideLoading();
        console.error('Error updating quantity:', error);
        showNotification('Failed to update quantity', 'error');
    }
}

async function removeFromCart(productId) {
    try {
        if (contract && currentAccount) {
            showLoading('Removing item...');
            await contract.methods.removeFromCart(productId).send({
                from: currentAccount
            });
            await loadUserCart();
        } else {
            // Demo mode
            cart = cart.filter(item => item.productId != productId);
            updateCartDisplay();
            localStorage.setItem('demoCart', JSON.stringify(cart));
        }

        hideLoading();
        showNotification('Item removed from cart', 'success');

    } catch (error) {
        hideLoading();
        console.error('Error removing item:', error);
        showNotification('Failed to remove item', 'error');
    }
}

async function clearCart() {
    try {
        if (cart.length === 0) {
            showNotification('Cart is already empty', 'info');
            return;
        }

        if (contract && currentAccount) {
            showLoading('Clearing cart...');
            await contract.methods.clearCart().send({
                from: currentAccount
            });
            await loadUserCart();
        } else {
            // Demo mode
            cart = [];
            updateCartDisplay();
            localStorage.removeItem('demoCart');
        }

        hideLoading();
        showNotification('Cart cleared', 'success');

    } catch (error) {
        hideLoading();
        console.error('Error clearing cart:', error);
        showNotification('Failed to clear cart', 'error');
    }
}

async function purchaseCart() {
    try {
        if (cart.length === 0) {
            showNotification('Your cart is empty', 'error');
            return;
        }

        if (!currentAccount) {
            showNotification('Please connect your wallet first', 'warning');
            return;
        }

        let totalAmount;
        if (contract) {
            totalAmount = await contract.methods.getCartTotal(currentAccount).call();
        } else {
            // Demo mode - calculate total
            totalAmount = cart.reduce((sum, item) => {
                const product = products.find(p => p.id == item.productId);
                return sum + (parseFloat(web3 ? web3.utils.fromWei(product.price.toString(), 'ether') : product.price) * item.quantity);
            }, 0);
            totalAmount = web3 ? web3.utils.toWei(totalAmount.toString(), 'ether') : totalAmount;
        }

        showLoading('Processing purchase...');

        if (contract) {
            await contract.methods.purchaseCart().send({
                from: currentAccount,
                value: totalAmount
            });
            
            await loadUserCart();
            await loadUserOrders();
        } else {
            // Demo mode - simulate purchase
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Add to demo orders
            const orders = JSON.parse(localStorage.getItem('demoOrders') || '[]');
            orders.push({
                orderId: orders.length + 1,
                buyer: currentAccount,
                totalAmount: web3 ? web3.utils.fromWei(totalAmount, 'ether') : totalAmount,
                timestamp: Date.now(),
                items: [...cart]
            });
            localStorage.setItem('demoOrders', JSON.stringify(orders));
            
            // Clear cart
            cart = [];
            updateCartDisplay();
            localStorage.removeItem('demoCart');
        }

        hideLoading();
        showNotification('Purchase completed successfully! 🎉', 'success');
        showSection('orders');

    } catch (error) {
        hideLoading();
        console.error('Error purchasing cart:', error);
        showNotification('Purchase failed. Please try again.', 'error');
    }
}

async function loadUserOrders() {
    try {
        const ordersList = document.getElementById('orders-list');
        const ordersEmpty = document.getElementById('orders-empty');

        let orders = [];

        if (contract && currentAccount) {
            const orderIds = await contract.methods.getUserOrders(currentAccount).call();
            
            for (let orderId of orderIds) {
                const order = await contract.methods.getOrder(orderId).call();
                orders.push(order);
            }
        } else if (currentAccount) {
            // Demo mode
            orders = JSON.parse(localStorage.getItem('demoOrders') || '[]');
        }

        if (orders.length === 0) {
            ordersList.style.display = 'none';
            ordersEmpty.style.display = 'block';
            return;
        }

        ordersEmpty.style.display = 'none';
        ordersList.style.display = 'block';
        ordersList.innerHTML = '';

        orders.forEach(order => {
            const orderCard = createOrderCard(order);
            ordersList.appendChild(orderCard);
        });

    } catch (error) {
        console.error('Error loading orders:', error);
    }
}

function createOrderCard(order) {
    const card = document.createElement('div');
    card.className = 'order-card slide-up';

    const date = new Date(order.timestamp * 1000 || order.timestamp).toLocaleDateString();
    const totalAmount = web3 && order.totalAmount.toString().length > 10 
        ? web3.utils.fromWei(order.totalAmount.toString(), 'ether') 
        : order.totalAmount;

    let itemsHtml = '';
    if (order.items) {
        order.items.forEach(item => {
            const product = products.find(p => p.id == item.productId);
            if (product) {
                itemsHtml += `
                    <div class="order-item">
                        <span class="order-item-name">${product.name}</span>
                        <span class="order-item-quantity">Qty: ${item.quantity}</span>
                    </div>
                `;
            }
        });
    }

    card.innerHTML = `
        <div class="order-header">
            <div class="order-id">Order #${order.orderId}</div>
            <div class="order-date">${date}</div>
            <div class="order-total">${parseFloat(totalAmount).toFixed(4)} ETH</div>
        </div>
        <div class="order-items">
            ${itemsHtml}
        </div>
    `;

    return card;
}

function showSection(sectionName) {
    // Update navigation
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

    // Show section
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    document.getElementById(`${sectionName}-section`).classList.add('active');

    // Load data based on section
    if (sectionName === 'cart') {
        loadUserCart();
    } else if (sectionName === 'orders') {
        loadUserOrders();
    }
}

function filterProducts() {
    const category = document.getElementById('category-filter').value;
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    displayProducts(filteredProducts);
}

function sortProducts() {
    const sortBy = document.getElementById('sort-options').value;
    const sortedProducts = [...products];

    switch (sortBy) {
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'price-low':
            sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            break;
    }

    displayProducts(sortedProducts);
}

// Utility functions
function showNotification(message, type = 'info') {
    const container = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    container.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

function showLoading(text = 'Loading...') {
    const overlay = document.getElementById('loading-overlay');
    const loadingText = document.getElementById('loading-text');
    loadingText.textContent = text;
    overlay.style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loading-overlay').style.display = 'none';
}

// Initialize cart display on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay();
});

// Handle account changes
if (window.ethereum) {
    window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length === 0) {
            // User disconnected
            currentAccount = null;
            document.getElementById('connect-wallet').style.display = 'block';
            document.getElementById('wallet-info').style.display = 'none';
            cart = [];
            updateCartDisplay();
        } else {
            // Account changed
            location.reload();
        }
    });
}