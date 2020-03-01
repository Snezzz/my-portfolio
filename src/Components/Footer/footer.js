import React from "react";
import './index.css'

export const Footer = () =>{
    return (
        <footer className="footer">
            <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-9">
                    <div className="author">
                        <b>&#169;Разработчик Щеникова С.А.</b>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3">
                    <div className="links-second">
                    <div className="social telegram">
                        <a href="https://tlgg.ru/Snezzzzzzz">
                            <i className="fa fa-paper-plane fa-1x"></i>
                        </a>
                    </div>
                    <div className="social github">
                        <a href="https://github.com/Snezzz">
                            <i className="fa fa-github fa-1x"></i>
                        </a>
                    </div>
                    <div className="social youtube">
                        <a href="https://www.youtube.com/channel/UCLvuyMC43RXmSnpTPjLLSJQ">
                            <i className="fa fa-youtube fa-1x"></i>
                        </a>
                    </div>
                    <div className="social vk">
                        <a href="https://vk.com/snezzz">
                            <i className="fa fa-vk fa-1x"></i>
                        </a>
                    </div>
                    <div className="social instagram">
                        <a href="https://www.instagram.com/snezzzzzzzzz/">
                            <i className="fa fa-instagram fa-1x"></i>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
            </div>

        </footer>
    )
};