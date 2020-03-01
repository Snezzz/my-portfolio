import React from 'react'
import {getData,toggleElement} from "../actions/main";
import connect from "react-redux/es/connect/connect";
import Portfolio from "../Components/Portfolio/index"
import {Route, Switch} from "react-router-dom";
import Developer from "../Components/Portfolio/Developer/developer";
import PhotoEditor from "../Components/Portfolio/PhotoEditor/photo-editor";
import VideoMaker from "../Components/Portfolio/VideoMaker/video-maker";
import lodash from "lodash";
import {NoMatchPage} from "../Components/NoMatchPage";


class PortfolioContainer extends React.Component {

    getInformation = (type) => {
        let value = this.props.location.pathname.substr(7,this.props.location.pathname.lastIndex)
        this.props.getData(this.props.db,`/information/${value}`)
    };




    render() {

        return (

            <Portfolio {...this.props}>
                <Switch>
                    <Route path="/works/developer">
                        <Developer {...this.props} getInformation={this.getInformation}
                        />
                    </Route>
                    <Route path="/works/video-maker">
                        <VideoMaker {...this.props}
                                    getInformation={this.getInformation}
                        /></Route>
                    <Route path="/works/photo-editor">
                        <PhotoEditor{...this.props}
                                    getInformation={this.getInformation}
                        /></Route>
                    <Route component={NoMatchPage}/>
                </Switch>
            </Portfolio>
        )
    }


}
const mapStateToProps = state => ({
    portfolio: state.portfolioReducer,
    db: state.dbReducer
});

const mapDispatchToProps = dispatch =>({
    getData:(db,from)=>{
        dispatch(getData(db,from))
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(PortfolioContainer)