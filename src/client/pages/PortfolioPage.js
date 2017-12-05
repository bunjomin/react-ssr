import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0.01
}

const transitionStyles = {
    entering: {opacity: 0.01},
    entered: {opacity: 1}
}

class Portfolio extends Component {
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
                    <title>{`Ben Harrington's Portfolio`}</title>
                    <meta property="og:title" content="Ben Harrington's Web Development Portfolio" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="http://www.ben-harrington.com" />
                    <meta property="og:image" content="http://www.ben-harrington.com/imgs/b-logo.svg" />
                    <meta property="og:description" content="A list of the web development projects that I've worked on" />
                </Helmet>
                <Transition in={!!show} timeout={duration}>
                {(state) => <div className='page-portfolio' style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                    <div className='card-content' id='one'>
                        <div className='img-and-text'>
                            <div className='grad-container'>
                                <div className='img-container'>
                                </div>
                            </div>
                            <h3>Ben-Harrington.com</h3>
                            <p>This web developer portfolio is a React and Redux web-app that uses<br />
                                server-side rendering and follows Google's Material Design philosophy.
                                <br />
                                <br />
                                Pages are rendered and sent with Node and ExpressJS, reducing load <br />
                                time and improving SEO potential compared to a vanilla React site.
                            </p>
                        </div>
                    </div>

                    <div className='card-content' id='two'>
                        <div className='img-and-text'>
                            <div className='grad-container'>
                                <div className='img-container'>
                                </div>
                            </div>
                            <h3>Ben-Harrington.com</h3>
                            <p>
                                An earlier version of this portfolio, focused more heavily on photography. Made use of Facebook's 
                                Graph API to dynamically pull photos from my Facebook page and to format blog posts out of 
                                my Facebook posts.
                            </p>
                        </div>
                    </div>

                    <div className='card-content' id='three'>
                        <div className='img-and-text'>
                            <div className='grad-container'>
                                <div className='img-container'>
                                </div>
                            </div>
                            <h3>Photography</h3>
                            <p>
                                Click <a href='https://www.facebook.com/pg/bhwebdesign/photos/?tab=album&album_id=907879402703825'>HERE</a> to check out some of my photography.
                            </p>
                        </div>
                    </div>
                </div>
                }
                </Transition>
            </div>
        );
    }
}

export default {
    component: Portfolio
};