import React from 'react'
import './index.css'
import lodash from 'lodash'
import hash from 'js-hash-code';

class Developer extends React.Component {

componentWillMount(){
    this.props.getInformation(`/information/developer`);
}
getLinks = (links) =>{
    console.log(links)
    return links.split(",")
};
    render() {

        return (
                        <div className="portfolio-description">
                            <div className="portfolio-skills">
                                <h4>Skills:</h4>
                                <div className="row">
                                    {!lodash.isEmpty(this.props.portfolio.skills)?(
                                        this.props.portfolio.skills.map((item,i)=>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4"
                                                 key={hash(i+10)}>
                                                <div className="skill">
                                                    <img src={item.img} alt={item.name} title={item.name}/>
                                                    <div>
                                                    <label title="Уровень владения (опыт в годах)" >Level: {item.level}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        )):(null)}
                                </div>
                            </div>
                            <div className="portfolio-projects">
                                <h4>Projects:</h4>
                                <ol>
                                    {!lodash.isEmpty(this.props.portfolio.projects)?(
                                                this.props.portfolio.projects.map((item,i)=>
                                                    <li key={hash(i+Math.random())}>
                                                        <b>{item.name}:</b>
                                                        <p key={hash(item.i*100)}> {item.description}</p>
                                                        {this.props.portfolio.type === "developer"?(
                                                            this.getLinks(item.link).map((i,l)=>
                                                        <p key={hash(item.i+10)}><a href={i}>{i}</a></p>
                                                            )):(null)
                                                    }
                                                    </li>
                                                )
                                    ):(null)}
                                </ol>

                            </div>
                        </div>
        )
    }
}

export default Developer