import React from 'react'
import './index.css'

export const Contacts  = (props) => {
      return (
          <div className="contacts">
              <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                      <div className="avatar">
                          <img src="/img/me2.jpg" alt="avatar"/>
                      </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
                      <div className="title">
                          <span>Пишите, всегда рада ответить!</span>
                      </div>
                  <div className="links">

                          {Object.values(props.contacts).map((item)=>
                              <div className={`social ${item.title}` }>
                                <a href={item.href}>
                                    <i className={`fa fa-${item.name} fa-1x`}></i>
                                </a>

                              </div>
                          )}
                  </div>

                  </div>
              </div>
          </div>
      )
};