export const addItemToCart = (cartItems, addItem) => {
    const checkDuplicateItems = cartItems.find(cartItem => 
        cartItem.id === addItem.id
    )
    if(checkDuplicateItems){
        return cartItems.map(cartItem =>
            cartItem.id === addItem.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }
    return [...cartItems, {...addItem, quantity: 1}]
}

export const removeItemFromCart = (cartItems, removeItem) => {
    const checkExistingItem = cartItems.find(cartItem => cartItem.id === removeItem.id)

    if(checkExistingItem.quantity === 1){
        return cartItems.filter(cartItem => 
            cartItem.id !== removeItem.id
        )
    }

    return cartItems.map(cartItem => 
        cartItem.id === removeItem.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    )
}
