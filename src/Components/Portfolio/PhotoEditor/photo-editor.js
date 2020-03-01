import React from 'react'
import './index.css'
import lodash from 'lodash'

class PhotoEditor extends React.Component {

    componentWillMount(){
                    this.props.getInformation(`/information/photo-editor`)
    }

    render() {

        return (

                        <div className="portfolio-description">
                            <div className="portfolio-skills">
                                <h4>Skills:</h4>
                                <div className="row">
                                    {!lodash.isEmpty(this.props.portfolio.skills)?(
                                        this.props.portfolio.skills.map((item)=>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                <div className="skill">
                                                    <p>{item.name}</p>
                                                    <img src={item.img} alt={item.name}/>
                                                    <div>
                                                    <label>Level: {item.level}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        )):(null)}
                                </div>
                            </div>
                            <div className="portfolio-projects">
                                <h4>Projects:</h4>
                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        {this.props.portfolio.projects.map((item,i)=>
                                            i===0?
                                                (<div className="carousel-item active">
                                                <img src={item.src} className="d-block w-100" alt="..."/>
                                            </div>):
                                                (<div className="carousel-item">
                                                    <img src={item.src} className="d-block w-100" alt="..."/>
                                                </div>)

                                        )}
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                                       data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                                       data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                                <h2>Больше работ вы можете найти <a href={this.props.portfolio.link}>здесь</a></h2>

                            </div>

                        </div>

        )
    }
}

export default PhotoEditor