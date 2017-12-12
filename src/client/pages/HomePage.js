import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Transition } from 'react-transition-group';
import { Link } from 'react-router-dom';

const duration = 700;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0.01,
}

const transitionStyles = {
  entering: { opacity: 0.01 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0.01 }
};

const duration2 = 250;

const defaultStyle2 = {
  transition: `transform ${duration}ms ease-out`,
  transform: `translateY(${-150}px)`,
  zIndex: -1
}

const transitionStyles2 = {
  entering: { transform: `translateY(${-150}px)` },
  entered: { transform: `translateY(${0}px)` }
};

const duration3 = 500;

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }

    componentDidMount() {
        this.setState({show: true});
    }

    render() {
        const { show } = this.state;
        return(
            <div>
                <Helmet>
                    <title>{`Ben Harrington Web Design`}</title>
                    <meta property="og:title" content="Ben Harrington Web Design" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="http://www.ben-harrington.com" />
                    <meta property="og:image" content="http://www.ben-harrington.com/imgs/b-logo.svg" />
                    <meta property="og:description" content="Front-end web developer and designer specializing in ReactJS" />
                </Helmet>
                <Transition in={!!show} timeout={duration}>
                    {(state) => (
                    <div className='page-home' style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        <Transition in={!!show} timeout={duration2}>
                        {(state) => (
                        <div className='about-me' style={{
                            ...defaultStyle2,
                            ...transitionStyles2[state]
                        }}>
                            <h3>
                                Who am I?
                            </h3>
                            <Transition in={!!show} timeout={duration3}>
                                {(state) => (
                                    <div style={{
                                            ...defaultStyle2,
                                            ...transitionStyles2[state]
                                        }}>
                                        <p> 
                                            My name is Ben Harrington, and I've tinkered with web development for as long as I can 
                                            remember, but started taking it seriously in Summer 2017. I consider myself knowledgable 
                                            in HTML, CSS, JavaScript, Node, React, Redux, Angular, Vue, and Meteor.<br />
                                            <br />
                                            Let me help you create a slick website.<br/>
                                        </p>
                                    </div>
                                )}
                            </Transition>
                        </div>
                        )}</Transition>
                        <Link to='/contact' className='link-contact'><button className='btn-get-started'>Get Started</button></Link>
                        <Link to='/services'className='link-services'><button className='btn-learn-more'>Learn More</button></Link>
                        <img src='imgs/mountain.svg' id='mountain' />

                        <div className='react-front-end'>
                            <h3>React is the future, and you should be using it</h3>
                            <p>
                                Today's most powerful framework available for distributing your experience to a visitor is React.<br />
                                <br />
                                React is a revolutionary JavaScript framework created by Facebook that can
                                be used to create very powerful and elegant web-apps and websites.<br />
                                <br />
                                By working with me to create a website in React with server-side rendering and 
                                SEO, you will reach and retain more clients through web-traffic than ever before.
                            </p>
                        </div>

                        <div className='intro'>
                            <h3>My goal is to improve your business aesthetic and create a positive association between user and site</h3>
                            <p>
                                As a primarily front-end developer, I specialize in creating a pleasant aesthetic that will help your 
                                users remember you, your business and/or your product positively in the future.
                            </p>
                        </div>
                    </div>
                    )}
                </Transition>
            </div>
        );
    }
};

export default {
    component: Home
};