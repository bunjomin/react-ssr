import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';

const duration1 = 250;
const duration2 = 500;

const defaultStyle = {
  transition: `opacity ${duration1}ms ease-out`,
  opacity: 0.01
}

const transitionStyles = {
  entering: { opacity: 0.01 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0.01 }
};

class Header extends Component {
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

        return (
            <Transition in={show} timeout={duration1}>
            {(state) => (
              <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}>
                    <div className='nav-wrapper'>
                        <Transition in={show} timeout={duration1}>
                            {(state) => (
                            <div className='nav-container' style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}><h1><Link to="/" className="home-logo"><img src='imgs/b-logo.svg' /><h2>en Harrington Web Design</h2></Link></h1>
                                <Transition in={show} timeout={duration2}>
                                    {(state) => (
                                    <div className='nav-buttons' style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state]
                                    }}>
                                        <ul>
                                            <Link to='/portfolio'><li id='1'>Portfolio</li></Link>
                                            <Link to='/services'><li id='2'>Services</li></Link>
                                            <Link to='/contact'><li id='3'>Contact</li></Link>
                                        </ul>
                                    </div>
                                    )}
                                </Transition>
                            </div>
                            )}
                        </Transition>
                    </div>
                </div>
            )}
            </Transition>
        )
    }
}

export default connect()(Header);