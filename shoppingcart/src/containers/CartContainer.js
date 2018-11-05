import React, { Component } from 'react'
import Cart from './../components/Cart'
import CartItem from './../components/CartItem'
import CartResult from './../components/CartResult'
import {connect} from 'react-redux'
import PropTypes from "prop-types"
import * as messages  from "./../constants/Message"
class CartContainer extends Component {

    render() {
        let {cart} = this.props
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showCartAmountResult(cart)}
            </Cart>
        )
    }
    showCartItem(cart) {
        let result = messages.CART_EMPTY
        if (cart) {
            result = cart.map((item, index) => {
                return <CartItem key={index} item={item}/>
            })
        }
        
        return result
    }
    showCartAmountResult(cart) {
        let result = null
       
        if (cart) {
            result = <CartResult>{cart}</CartResult>
        }
        return result
    }
   
    
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({

            }),
            qty: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}


export default connect(mapStateToProps, null) (CartContainer)