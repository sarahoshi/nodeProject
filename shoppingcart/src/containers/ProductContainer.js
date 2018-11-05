import React, { Component } from 'react'
import ProductList from '../components/ProductList'
import Product from '../components/Product'
import {connect} from 'react-redux'
import PropTypes from "prop-types"
import {actAddToCart} from "./../actions/index"
class ProductContainer extends Component {

    render() {
        let {products} = this.props 
        return (
            <ProductList>
                {this.showProducts(products)}
            </ProductList>
        )
    }
    showProducts(products) {
        var result = null;
        let { onAddToCart } = this.props
        if (products) {
            result = products.map((prd, index) => {
                return <Product  key={index} product={prd} onAddToCart={onAddToCart}/>
            })
        }
        return result
    }
    
}

ProductContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductContainer)