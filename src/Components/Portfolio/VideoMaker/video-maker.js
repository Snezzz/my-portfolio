import React from 'react'
import './index.css'
import lodash from 'lodash'

class VideoMaker extends React.Component {

    componentWillMount(){
        this.props.getInformation(`/information/video-maker`)
    }
    render() {
        console.log(this.props.portfolio)
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
                                                    <label  title="Уровень владения (опыт в годах)" >Level: {item.level}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        )):(null)}
                                </div>
                            </div>
                            <div className="portfolio-projects">
                                <h4>Projects:</h4>
                                <ul className="video-list">
                                    {!lodash.isEmpty(this.props.portfolio.projects)?(

                                                this.props.portfolio.projects.map((item,i)=>
                                                    <li>
                                                        <iframe width="300vw" height="200vhn" src={item.link} title={i}
                                                                frameBorder="0"
                                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                                allowFullScreen/>
                                                    </li>
                                                )
                                    ):(null)}
                                </ul>
                                <h2>Мой <a href={this.props.portfolio.link}>канал</a></h2>

                            </div>

                        </div>

        )
    }
}

export default VideoMaker