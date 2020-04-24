import React, { Component } from 'react';
import Typed from 'react-typed';
import BaseLayout from '../components/layouts/BaseLayout';
import { Container, Row, Col } from 'reactstrap';

class Index extends Component {

  constructor(props) {
    super(props);

    this.roles = ['Coder', 'React.js Lover', 'Fullstack Developer'];
  }

    render() {
        return (
            <BaseLayout className="cover">
            <div className="main-section">
              <Container>
                <Row>
                  <Col md="6">
                    <div className="hero-section">
                      <div className={`flipper`}>
                        <div className="back">
                          <div className="hero-section-content">
                            <h2> Full Stack Web Developer </h2>
                            <div className="hero-section-content-intro">
                              Have a look at my portfolio and job history.
                            </div>
                          </div>
                          <img className="image" src="/static/images/section-1.png"/>
                          <div className="shadow-custom">
                            <div className="shadow-inner"> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="6" className="hero-welcome-wrapper">
                    <div className="hero-welcome-text">
                      <h1>
                        Welcome to the portfolio website of Timo Kock.
                        Get informed, collaborate and discover projects I was working on through the years!
                      </h1>
                    </div>
                    
                    <Typed
                      className="self-typed"
                      loop
                      typeSpeed={60}
                      backSpeed={60}
                      strings={this.roles}
                      smartBackspace
                      shuffle={false}
                      backDelay={1000}
                      fadeOutDelay={1000}
                      loopCount={0}
                      showCursor
                      cursorChar="|"
                    />
                    <div className="hero-welcome-bio">
                      <h1>
                        Let's take a look on my work.
                      </h1>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </BaseLayout>
        );
    };
};

export default Index;