import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from './Header'
import * as actions from '../actions'


const Dashboard = () => <h2>Dashboard</h2>
const Surveys = () => <h2>Surveys</h2>
const SurveysNew = () => <h2>SurveysNew</h2>
const Landing = () => <h2>Landing</h2>



class App extends Component {
    componentDidMount(){
        this.props.fetchUser()
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Surveys}/>
                        <Route path="/surveys/new" component={SurveysNew}/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/landing" component={Landing}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions) (App)