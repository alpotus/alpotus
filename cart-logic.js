const CartLogic = {
    // 1. Get items from local storage
    get() {
        try {
            return JSON.parse(localStorage.getItem('alpotus_cart') || '[]');
        } catch (e) {
            return [];
        }
    },

    // 2. Toggle a topic in/out of the cart
    toggle(sub, unit, topic) {
        let cart = this.get();
        const index = cart.findIndex(i => i.topic === topic && i.sub === sub);
        
        if (index > -1) {
            cart.splice(index, 1); // Remove if exists
        } else {
            cart.push({ sub, unit, topic }); // Add if new
        }
        
        localStorage.setItem('alpotus_cart', JSON.stringify(cart));
        this.updateUI();
        return index === -1; // returns true if added, false if removed
    },

    // 3. Check if a topic is already in cart
    isInCart(topic) {
        return this.get().some(i => i.topic === topic);
    },

    // 4. Update the floating button count and visibility
    updateUI() {
        const cart = this.get();
        const count = cart.length;
        const btn = document.getElementById('cart-float');
        const badge = document.getElementById('cart-count');
        
        if (btn && badge) {
            btn.style.display = count > 0 ? 'flex' : 'none';
            badge.innerText = count;
        }
    },

    // 5. THE MISSING FUNCTION: Clears the cart after finishing a quiz
    clear() {
        localStorage.removeItem('alpotus_cart');
        this.updateUI();
        console.log("Cart Cleared Successfully");
    },

    // 6. Jump to Quiz Engine with the whole cart
    startQuiz() {
        const cart = this.get();
        if (cart.length === 0) {
            alert("Your cart is empty. Please add some topics first!");
            return;
        }
        
        const sessionData = encodeURIComponent(JSON.stringify(cart));
        location.href = `qbank-engine.html?mode=multi&data=${sessionData}`;
    }
};