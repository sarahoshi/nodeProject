import React, { Component } from 'react'
import { connect } from 'react-redux'
class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return
            case false:
                return <li><a href='/auth/google'>Login with Gmail</a></li>
            default:
                return  <ul>
                            <li><img className="responsive-img" src={this.props.auth.avatar}></img></li>
                            <li>{this.props.auth.username}</li>
                            <li><a href='/api/logout'>Logout</a></li>
                        </ul>
        }
    }
    render() {
        
        return (

            <nav>
                <div className="container">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">日本語・コミュニティ</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                        { this.renderContent() }
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStatetoProps( {auth} )
{
    return { auth }
}

export default connect(mapStatetoProps) (Header)