import React, { Component } from 'react'
import Message from '../components/Message'
import {connect} from 'react-redux'
class CartContainer extends Component {

    render() {
        return (
            <Message>
                {this.props.message}
            </Message>
        )
    } 
}


const mapStateToProps = state => {
    return {
        message: state.message
    }
}


export default connect(mapStateToProps, null) (CartContainer)