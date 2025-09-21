// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title Futuristic Clothing Store
 * @dev A smart contract for a decentralized clothing store with cart and purchase functionality
 */
contract ClothingStore {
    struct Product {
        uint id;
        string name;
        string description;
        string imageUrl;
        uint price; // Price in wei
        uint stock;
        string category;
        bool isActive;
    }

    struct CartItem {
        uint productId;
        uint quantity;
    }

    struct Order {
        uint orderId;
        address buyer;
        uint totalAmount;
        uint timestamp;
        bool isCompleted;
        CartItem[] items;
    }

    address public owner;
    uint public nextProductId;
    uint public nextOrderId;
    
    mapping(uint => Product) public products;
    mapping(address => CartItem[]) public userCarts;
    mapping(uint => Order) public orders;
    mapping(address => uint[]) public userOrders;

    event ProductAdded(uint indexed productId, string name, uint price, uint stock);
    event ProductUpdated(uint indexed productId, string name, uint price, uint stock);
    event AddedToCart(address indexed user, uint indexed productId, uint quantity);
    event RemovedFromCart(address indexed user, uint indexed productId);
    event CartCleared(address indexed user);
    event OrderPlaced(uint indexed orderId, address indexed buyer, uint totalAmount);
    event OrderCompleted(uint indexed orderId);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    modifier productExists(uint _productId) {
        require(_productId < nextProductId && products[_productId].isActive, "Product does not exist or is inactive");
        _;
    }

    constructor() {
        owner = msg.sender;
        nextProductId = 0;
        nextOrderId = 1;
        
        // Add some initial products
        _addInitialProducts();
    }

    function _addInitialProducts() private {
        addProduct("Cyber Jacket", "Futuristic LED-embedded jacket with climate control", "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400", 0.5 ether, 10, "Jackets");
        addProduct("Holo Pants", "Smart fabric pants with holographic patterns", "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400", 0.3 ether, 15, "Pants");
        addProduct("Neural Headset", "Brain-computer interface fashion accessory", "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", 1.0 ether, 5, "Accessories");
        addProduct("Quantum Sneakers", "Self-lacing shoes with anti-gravity tech", "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400", 0.8 ether, 8, "Shoes");
        addProduct("Solar Shirt", "Energy-harvesting fabric shirt", "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400", 0.4 ether, 12, "Shirts");
        addProduct("Plasma Goggles", "Augmented reality eyewear", "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400", 0.6 ether, 7, "Accessories");
    }

    function addProduct(
        string memory _name,
        string memory _description,
        string memory _imageUrl,
        uint _price,
        uint _stock,
        string memory _category
    ) public onlyOwner {
        products[nextProductId] = Product({
            id: nextProductId,
            name: _name,
            description: _description,
            imageUrl: _imageUrl,
            price: _price,
            stock: _stock,
            category: _category,
            isActive: true
        });

        emit ProductAdded(nextProductId, _name, _price, _stock);
        nextProductId++;
    }

    function updateProduct(
        uint _productId,
        string memory _name,
        string memory _description,
        string memory _imageUrl,
        uint _price,
        uint _stock,
        string memory _category
    ) public onlyOwner productExists(_productId) {
        Product storage product = products[_productId];
        product.name = _name;
        product.description = _description;
        product.imageUrl = _imageUrl;
        product.price = _price;
        product.stock = _stock;
        product.category = _category;

        emit ProductUpdated(_productId, _name, _price, _stock);
    }

    function deactivateProduct(uint _productId) public onlyOwner productExists(_productId) {
        products[_productId].isActive = false;
    }

    function addToCart(uint _productId, uint _quantity) public productExists(_productId) {
        require(_quantity > 0, "Quantity must be greater than 0");
        require(products[_productId].stock >= _quantity, "Insufficient stock");

        CartItem[] storage cart = userCarts[msg.sender];
        
        // Check if product already in cart
        for (uint i = 0; i < cart.length; i++) {
            if (cart[i].productId == _productId) {
                cart[i].quantity += _quantity;
                emit AddedToCart(msg.sender, _productId, _quantity);
                return;
            }
        }

        // Add new item to cart
        cart.push(CartItem({
            productId: _productId,
            quantity: _quantity
        }));

        emit AddedToCart(msg.sender, _productId, _quantity);
    }

    function removeFromCart(uint _productId) public {
        CartItem[] storage cart = userCarts[msg.sender];
        
        for (uint i = 0; i < cart.length; i++) {
            if (cart[i].productId == _productId) {
                // Move last element to current position and remove last
                cart[i] = cart[cart.length - 1];
                cart.pop();
                emit RemovedFromCart(msg.sender, _productId);
                return;
            }
        }
    }

    function updateCartQuantity(uint _productId, uint _quantity) public productExists(_productId) {
        require(_quantity > 0, "Quantity must be greater than 0");
        require(products[_productId].stock >= _quantity, "Insufficient stock");

        CartItem[] storage cart = userCarts[msg.sender];
        
        for (uint i = 0; i < cart.length; i++) {
            if (cart[i].productId == _productId) {
                cart[i].quantity = _quantity;
                return;
            }
        }
    }

    function clearCart() public {
        delete userCarts[msg.sender];
        emit CartCleared(msg.sender);
    }

    function getCart(address _user) public view returns (CartItem[] memory) {
        return userCarts[_user];
    }

    function getCartTotal(address _user) public view returns (uint total) {
        CartItem[] memory cart = userCarts[_user];
        
        for (uint i = 0; i < cart.length; i++) {
            total += products[cart[i].productId].price * cart[i].quantity;
        }
    }

    function purchaseCart() public payable {
        CartItem[] memory cart = userCarts[msg.sender];
        require(cart.length > 0, "Cart is empty");

        uint totalAmount = getCartTotal(msg.sender);
        require(msg.value >= totalAmount, "Insufficient payment");

        // Check stock availability
        for (uint i = 0; i < cart.length; i++) {
            require(products[cart[i].productId].stock >= cart[i].quantity, "Insufficient stock for product");
        }

        // Update stock
        for (uint i = 0; i < cart.length; i++) {
            products[cart[i].productId].stock -= cart[i].quantity;
        }

        // Create order
        Order storage newOrder = orders[nextOrderId];
        newOrder.orderId = nextOrderId;
        newOrder.buyer = msg.sender;
        newOrder.totalAmount = totalAmount;
        newOrder.timestamp = block.timestamp;
        newOrder.isCompleted = true;

        // Copy cart items to order
        for (uint i = 0; i < cart.length; i++) {
            newOrder.items.push(cart[i]);
        }

        userOrders[msg.sender].push(nextOrderId);

        emit OrderPlaced(nextOrderId, msg.sender, totalAmount);
        emit OrderCompleted(nextOrderId);

        nextOrderId++;

        // Clear cart
        delete userCarts[msg.sender];

        // Refund excess payment
        if (msg.value > totalAmount) {
            payable(msg.sender).transfer(msg.value - totalAmount);
        }

        // Transfer payment to owner
        payable(owner).transfer(totalAmount);
    }

    function getProduct(uint _productId) public view returns (Product memory) {
        return products[_productId];
    }

    function getAllProducts() public view returns (Product[] memory) {
        Product[] memory activeProducts = new Product[](nextProductId);
        uint count = 0;

        for (uint i = 0; i < nextProductId; i++) {
            if (products[i].isActive) {
                activeProducts[count] = products[i];
                count++;
            }
        }

        // Create array with correct size
        Product[] memory result = new Product[](count);
        for (uint i = 0; i < count; i++) {
            result[i] = activeProducts[i];
        }

        return result;
    }

    function getUserOrders(address _user) public view returns (uint[] memory) {
        return userOrders[_user];
    }

    function getOrder(uint _orderId) public view returns (
        uint orderId,
        address buyer,
        uint totalAmount,
        uint timestamp,
        bool isCompleted,
        CartItem[] memory items
    ) {
        Order storage order = orders[_orderId];
        return (
            order.orderId,
            order.buyer,
            order.totalAmount,
            order.timestamp,
            order.isCompleted,
            order.items
        );
    }

    function withdrawFunds() public onlyOwner {
        payable(owner).transfer(address(this).balance);
    }

    function getContractBalance() public view returns (uint) {
        return address(this).balance;
    }
}