import * as types from "./../constants/ActionTypes"
var data = JSON.parse(localStorage.getItem("cart"))
let initializeState = data ? data : []


const cart = (state = initializeState, action) => {
    var { product, qty } = action
    let index = -1
    switch(action.type) {
        case types.ADD_TO_CART:
            index = findProductInCart(state, product)
            if (index !== -1) {
                state[index].qty += qty 
            } else {
                state.push({
                    product,
                    qty
                })
            }
            localStorage.setItem("cart", JSON.stringify(state))
            return [...state]
        default: 
            return [...state]
    }
}

var findProductInCart = (cart, prd) => {
    var index = -1
    if (cart) {
        let n = cart.length
        for (let i = 0;i < n; i++ ) {
            
            if (cart[i].product.id === prd.id) {
                return i
            }
        }
    }
    return index

}

export default cart