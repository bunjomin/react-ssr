import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import EmailForm from '../components/EmailForm';
import { Transition } from 'react-transition-group';

const duration = 500;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-out`
}

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 }
};

const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
};

function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=/]/g, function (s) {
        return entityMap[s];
    });
}

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };

        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({show: true});
    }

    /*handleSubmit(e, subject, email, message) {
        e.preventDefault();

        subject = escapeHtml(subject);
        email = escapeHtml(email);
        message = escapeHtml(message);
        
        axios.post(`http://www.ben-harrington.com/sendemail.php?subject=${subject}&email=${email}&message=${message}`)
        .then(function(response) {
            if(response.statusText === 'OK') {
                alert('Thanks! Your email has been sent.');
            }
        })
        .catch(function(error) {
            return console.log(error);
        });
    }*/

    render() {
        const {show} = this.state;

        return(
            <div>
                <Helmet>
                    <title>{`Ben Harrington: Get in Touch!`}</title>
                    <meta property="og:title" content="Get in touch!" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="http://www.ben-harrington.com" />
                    <meta property="og:image" content="http://www.ben-harrington.com/imgs/b-logo.svg" />
                    <meta property="og:description" content="Drop me a line to find out about the solutions I can provide for you!" />
                </Helmet>
                <Transition in={!!show} timeout={duration}>
                    {(state) => <div className='page-contact' style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                        <h3>Questions or comments?</h3>
                        <p>
                            If you'd like to start a dialog about the solutions I can provide for you, please
                            feel free to drop me a message!<br/>
                            <br/>
                        </p>
                        <h3><a href='mailto:contact@ben-harrington.com'>Contact@Ben-Harrington.com</a></h3>
                        {/*<EmailForm Submit={this.handleSubmit} />*/}
                    </div>}
                </Transition>
            </div>
        );
    }
};

export default {
    component: Contact
};