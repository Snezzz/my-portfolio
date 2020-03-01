import React from 'react'
import './index.css'

export const About = (props) =>{

    return (
        <div className="user-about">
            <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-5">
                    <div className="user-avatar">
                        <img src={props.info.avatar} alt="avatar"/>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-7">
                    <div className="user-information">
                        <p>{props.info.text}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
};