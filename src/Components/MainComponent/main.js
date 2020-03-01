import React from 'react'
import Header from "../Header/index";
import Navigation from "../Navigation/index";
import Footer from "../Footer/index";
import './index.css'
import {getData} from "../../actions/main";
import connect from "react-redux/es/connect/connect";


class MainComponent extends React.Component{

    render() {

        return (
            <>
                    <Header/>
                    <Navigation {...this.props} />
                    <section className="body">
                        {this.props.children}
                    </section>
                    <Footer/>
              </>
        )
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

export default connect(mapStateToProps,mapDispatchToProps)(MainComponent)
