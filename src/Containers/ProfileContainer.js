import React from 'react'
import {getData} from "../actions/main";
import connect from "react-redux/es/connect/connect";
import About from "../Components/About/index";
import lodash from 'lodash'

class ProfileContainer extends React.Component{

    componentWillMount(){
        this.props.getData(this.props.db,'/about')
    }
    render(){
        if(!lodash.isEmpty(this.props.info)){
            return (
                <About {...this.props}/>
            )
        }
        else return(<div className="empty-body"/>);
    }
}

const mapStateToProps = state => ({
    info: state.infoReducer,
    db: state.dbReducer
});

const mapDispatchToProps = dispatch =>({
    getData:(db,from)=>{
        dispatch(getData(db,from))
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)
