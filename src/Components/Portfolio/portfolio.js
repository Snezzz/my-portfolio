import React from 'react'
import './index.css'
import {Link} from "react-router-dom";
import lodash from 'lodash'
class Portfolio extends React.Component {



    toggleClass = (e) => {
        if(this.prev!=null){
            this.prev.className-=" active"
        }
        e.currentTarget.className+=" active";
        this.prev =  e.target;

    };
    componentWillMount(){
        const type = this.props.location.pathname.substr(6,this.props.location.pathname.length)
        this.props.getData(this.props.db,`/information${type}`)

    }

    render() {

        if(!lodash.isEmpty(this.props.portfolio)) {
            return (

                <div className="portfolio">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className="portfolio-navigation">
                                <ul className="nav nav-pills flex-column">
                                    <Link to="developer" className="navbar-link">
                                        <li className="nav-item" onClick={this.toggleClass}>
                                            Developer
                                        </li>
                                    </Link>
                                    <Link to="photo-editor" className="navbar-link">
                                        <li className="nav-item" onClick={this.toggleClass}>
                                            Photo editor
                                        </li>
                                    </Link>
                                    <Link to="video-maker" className="navbar-link">
                                        <li className="nav-item" onClick={this.toggleClass}>
                                            Video maker
                                        </li>
                                    </Link>

                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="portfolio-body">
                                {this.props.children}
                            </div>
                        </div>

                    </div>
                    </div>
                </div>

            );

        }
        else return (null)
    }
}

export default Portfolio