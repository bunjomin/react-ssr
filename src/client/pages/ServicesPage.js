import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Transition } from 'react-transition-group';

const duration = 350;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

class Services extends Component {
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
        const {show} = this.state;

        return(
            <div>
                <Helmet>
                    <title>{`Ben Harrington: What I Can Do For You`}</title>
                    <meta property="og:title" content="Ben Harrington's Services" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="http://www.ben-harrington.com" />
                    <meta property="og:image" content="http://www.ben-harrington.com/imgs/b-logo.svg" />
                    <meta property="og:description" content="Website Design, SEO, App Development, the list goes on!" />
                </Helmet>
                <Transition in={!!show} timeout={duration}>
                {(state) => (
                  <div className='page-services' style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                  }}>
                        <ul>
                            <li>
                                <div className='card-serv'>
                                    <h3>
                                        Static Websites
                                    </h3>
                                    <p>
                                        A fixed storefront or display for your business or product. This is perfect 
                                        if you don't need any special features or dynamic content -- just display the 
                                        product and let it speak for itself.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className='card-serv'>
                                    <h3>Fully Featured Web Apps</h3>
                                    <p>
                                        If you need specific, custom features so your product or experience can shine: 
                                        live chat, development blog, forms, user accounts, just-for-fun features, or 
                                        anything else you can dream up, a fully featured web app is for you! Best served 
                                        up with React!
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className='card-serv'>
                                    <h3>
                                        Search Engine Optimization
                                    </h3>
                                    <p>
                                        Don't miss out on customers or traffic that you should be drawing in! Modern 
                                        SEO techniques are constantly changing, and standards are being raised. <br/> <br/>Taking 
                                        advantage of the most current SEO techniques will help your site show up first 
                                        on all search engines, and help you draw in users that may otherwise end up 
                                        choosing your competitors!
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    )}
                </Transition>
            </div>
        );
    }
}

export default {
    component: Services
};