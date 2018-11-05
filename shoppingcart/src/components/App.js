import React, { Component } from 'react'
import Header from './Header'
import ProductContainer from '../containers/ProductContainer'
import MessageContainer from '../containers/MessageContainer'
import CartContainer from '../containers/CartContainer'
import Footer from './Footer'
class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductContainer />
                    </div>
                </main>
                <MessageContainer/>
                <CartContainer/>
                <Footer />
            </div>
        )
    }
}

export default App