import React from 'react';
import './App.css';
import MainComponent from "./Components/MainComponent/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {rootReducer} from "./reducers/mainReducer";
import {createStore,applyMiddleware} from 'redux'
import {NoMatchPage} from "./Components/NoMatchPage";
import {connect} from "react-redux";
import {connectDB} from "./actions/main";
import thunk from "redux-thunk";
import PortfolioContainer from "./Containers/PortfolioContainer";
import ContactsContainer from "./Containers/ContactsContainer";
import ProfileContainer from "./Containers/ProfileContainer"

export const store = createStore(rootReducer,applyMiddleware(thunk));


class App extends React.Component {


    render() {
        return (
            <Router>
                <MainComponent db={this.props.db}>
                    <Switch>
                        <Route exact path="/" component={ProfileContainer}/>
                        <Route path="/works" component={PortfolioContainer}/>
                        <Route path="/contacts" component={ContactsContainer}/>
                        <Route component={NoMatchPage} />
                    </Switch>
                </MainComponent>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    db: state.dbReducer
});

const mapDispatchToProps = {
    connectDB
};
export default connect(mapStateToProps,mapDispatchToProps)(App);

