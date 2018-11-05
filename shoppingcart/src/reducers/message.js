import * as types from "../constants/ActionTypes"
import * as messages from "../constants/Message"

const message = (state = messages.MSG_WELCOME, action) => {
    let {product} = action
    switch(action.type) {
        case types.ADD_TO_CART:
        state = "Added " + product.name + " to cart success";
            return state
        default: 
            return state
    }
}

export default message