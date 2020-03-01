import React from 'react'
import { Link } from "react-router-dom";
import './index.css'

class Navigation extends React.Component{

    render(){
        return(
            <nav className="navigation">
                <div className="container-fluid">
                        <div className="row">
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <div className="menu-item">
                                <Link to='/'>About me</Link>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <div className="menu-item">
                                <Link to='/works/developer'>My works</Link>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <div className="menu-item">
                                <Link to='/contacts'>My Contacts</Link>
                            </div>
                        </div>
                        </div>
                </div>

            </nav>
        )
    }
}
export default Navigation;