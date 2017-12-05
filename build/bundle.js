/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HomePage = __webpack_require__(13);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _PortfolioPage = __webpack_require__(14);

var _PortfolioPage2 = _interopRequireDefault(_PortfolioPage);

var _ServicesPage = __webpack_require__(15);

var _ServicesPage2 = _interopRequireDefault(_ServicesPage);

var _ContactPage = __webpack_require__(16);

var _ContactPage2 = _interopRequireDefault(_ContactPage);

var _NotFoundPage = __webpack_require__(19);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _App = __webpack_require__(20);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
    routes: [_extends({}, _HomePage2.default, {
        path: '/',
        exact: true
    }), _extends({}, _PortfolioPage2.default, {
        path: '/portfolio'
    }), _extends({}, _ServicesPage2.default, {
        path: '/services'
    }), _extends({}, _ContactPage2.default, {
        path: '/contact'
    }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FETCH_POSTS = exports.FETCH_POSTS = 'fetch_posts';
var fetchPosts = exports.fetchPosts = function fetchPosts(dispatch, getState) {
    var res = function res() {
        return null;
    };

    dispatch({
        type: FETCH_POSTS,
        payload: res
    });
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10);

var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _expressHttpProxy = __webpack_require__(12);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _reactRouterConfig = __webpack_require__(4);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(22);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(25);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
    var store = (0, _createStore2.default)(req);

    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
        var route = _ref.route;

        return route.loadData ? route.loadData(store) : null;
    }).map(function (promise) {
        if (promise) {
            return new Promise(function (resolve, reject) {
                promise.then(resolve).catch(resolve);
            });
        }
    });

    Promise.all(promises).then(function () {
        var context = {};
        var content = (0, _renderer2.default)(req, store, context);

        if (context.url) {
            return res.redirect(302, context.url);
        }

        if (context.notFound) {
            res.status(404);
        }

        res.send(content);
    });
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(1);

var _reactTransitionGroup = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var duration = 700;

var defaultStyle = {
    transition: 'opacity ' + duration + 'ms ease-in-out',
    opacity: 0.01
};

var transitionStyles = {
    entering: { opacity: 0.01 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0.01 }
};

var duration2 = 250;

var defaultStyle2 = {
    transition: 'transform ' + duration + 'ms ease-out',
    transform: 'translateY(' + -150 + 'px)',
    zIndex: -1
};

var transitionStyles2 = {
    entering: { transform: 'translateY(' + -150 + 'px)' },
    entered: { transform: 'translateY(' + 0 + 'px)' }
};

var duration3 = 500;

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.state = {
            show: false
        };
        return _this;
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ show: true });
        }
    }, {
        key: 'render',
        value: function render() {
            var show = this.state.show;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement(
                        'title',
                        null,
                        'Ben Harrington Web Design'
                    ),
                    _react2.default.createElement('meta', { property: 'og:title', content: 'Ben Harrington Web Design' }),
                    _react2.default.createElement('meta', { property: 'og:type', content: 'website' }),
                    _react2.default.createElement('meta', { property: 'og:url', content: 'http://www.ben-harrington.com' }),
                    _react2.default.createElement('meta', { property: 'og:image', content: 'http://www.ben-harrington.com/imgs/b-logo.svg' }),
                    _react2.default.createElement('meta', { property: 'og:description', content: 'Front-end web developer and designer specializing in ReactJS' })
                ),
                _react2.default.createElement(
                    _reactTransitionGroup.Transition,
                    { 'in': !!show, timeout: duration },
                    function (state) {
                        return _react2.default.createElement(
                            'div',
                            { className: 'page-home', style: _extends({}, defaultStyle, transitionStyles[state]) },
                            _react2.default.createElement(
                                _reactTransitionGroup.Transition,
                                { 'in': !!show, timeout: duration2 },
                                function (state) {
                                    return _react2.default.createElement(
                                        'div',
                                        { className: 'about-me', style: _extends({}, defaultStyle2, transitionStyles2[state]) },
                                        _react2.default.createElement(
                                            'h3',
                                            null,
                                            'Who am I?'
                                        ),
                                        _react2.default.createElement(
                                            _reactTransitionGroup.Transition,
                                            { 'in': !!show, timeout: duration3 },
                                            function (state) {
                                                return _react2.default.createElement(
                                                    'div',
                                                    { style: _extends({}, defaultStyle2, transitionStyles2[state]) },
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'My name is Ben Harrington, and I\'ve tinkered with web development for as long as I can remember, but started taking it seriously in Summer 2017. I consider myself knowledgable in HTML, CSS, JavaScript, Node, React, Redux, Angular, Vue, and Meteor.',
                                                        _react2.default.createElement('br', null),
                                                        _react2.default.createElement('br', null),
                                                        'Let me help you create a slick website.',
                                                        _react2.default.createElement('br', null)
                                                    )
                                                );
                                            }
                                        )
                                    );
                                }
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'btn-get-started', onClick: function onClick(e) {
                                        window.location.href = 'http://www.ben-harrington.com/contact';
                                    } },
                                'Get Started'
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'btn-learn-more', onClick: function onClick(e) {
                                        window.location.href = 'http://www.ben-harrington.com/services';
                                    } },
                                'Learn More'
                            ),
                            _react2.default.createElement('img', { src: 'imgs/mountain.svg', id: 'mountain' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'react-front-end' },
                                _react2.default.createElement(
                                    'h3',
                                    null,
                                    'React is the future, and you should be using it'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Today\'s most powerful framework available for distributing your experience to a visitor is React.',
                                    _react2.default.createElement('br', null),
                                    _react2.default.createElement('br', null),
                                    'React is a revolutionary JavaScript framework created by Facebook that can be used to create very powerful and elegant web-apps and websites.',
                                    _react2.default.createElement('br', null),
                                    _react2.default.createElement('br', null),
                                    'By working with me to create a website in React with server-side rendering and SEO, you will reach and retain more clients through web-traffic than ever before.'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'intro' },
                                _react2.default.createElement(
                                    'h3',
                                    null,
                                    'My goal is to improve your business aesthetic and create a positive association between user and site'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'As a primarily front-end developer, I specialize in creating a pleasant aesthetic that will help your users remember you, your business and/or your product positively in the future.'
                                )
                            )
                        );
                    }
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

;

exports.default = {
    component: Home
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(1);

var _reactTransitionGroup = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var duration = 300;

var defaultStyle = {
    transition: 'opacity ' + duration + 'ms ease-in-out',
    opacity: 0.01
};

var transitionStyles = {
    entering: { opacity: 0.01 },
    entered: { opacity: 1 }
};

var Portfolio = function (_Component) {
    _inherits(Portfolio, _Component);

    function Portfolio(props) {
        _classCallCheck(this, Portfolio);

        var _this = _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).call(this, props));

        _this.state = {
            show: false
        };
        return _this;
    }

    _createClass(Portfolio, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ show: true });
        }
    }, {
        key: 'render',
        value: function render() {
            var show = this.state.show;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement(
                        'title',
                        null,
                        'Ben Harrington\'s Portfolio'
                    ),
                    _react2.default.createElement('meta', { property: 'og:title', content: 'Ben Harrington\'s Web Development Portfolio' }),
                    _react2.default.createElement('meta', { property: 'og:type', content: 'website' }),
                    _react2.default.createElement('meta', { property: 'og:url', content: 'http://www.ben-harrington.com' }),
                    _react2.default.createElement('meta', { property: 'og:image', content: 'http://www.ben-harrington.com/imgs/b-logo.svg' }),
                    _react2.default.createElement('meta', { property: 'og:description', content: 'A list of the web development projects that I\'ve worked on' })
                ),
                _react2.default.createElement(
                    _reactTransitionGroup.Transition,
                    { 'in': !!show, timeout: duration },
                    function (state) {
                        return _react2.default.createElement(
                            'div',
                            { className: 'page-portfolio', style: _extends({}, defaultStyle, transitionStyles[state]) },
                            _react2.default.createElement(
                                'div',
                                { className: 'card-content', id: 'one' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'img-and-text' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'grad-container' },
                                        _react2.default.createElement('div', { className: 'img-container' })
                                    ),
                                    _react2.default.createElement(
                                        'h3',
                                        null,
                                        'Ben-Harrington.com'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'This web developer portfolio is a React and Redux web-app that uses',
                                        _react2.default.createElement('br', null),
                                        'server-side rendering and follows Google\'s Material Design philosophy.',
                                        _react2.default.createElement('br', null),
                                        _react2.default.createElement('br', null),
                                        'Pages are rendered and sent with Node and ExpressJS, reducing load ',
                                        _react2.default.createElement('br', null),
                                        'time and improving SEO potential compared to a vanilla React site.'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'card-content', id: 'two' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'img-and-text' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'grad-container' },
                                        _react2.default.createElement('div', { className: 'img-container' })
                                    ),
                                    _react2.default.createElement(
                                        'h3',
                                        null,
                                        'Ben-Harrington.com'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'An earlier version of this portfolio, focused more heavily on photography. Made use of Facebook\'s Graph API to dynamically pull photos from my Facebook page and to format blog posts out of my Facebook posts.'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'card-content', id: 'three' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'img-and-text' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'grad-container' },
                                        _react2.default.createElement('div', { className: 'img-container' })
                                    ),
                                    _react2.default.createElement(
                                        'h3',
                                        null,
                                        'Photography'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Click ',
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'https://www.facebook.com/pg/bhwebdesign/photos/?tab=album&album_id=907879402703825' },
                                            'HERE'
                                        ),
                                        ' to check out some of my photography.'
                                    )
                                )
                            )
                        );
                    }
                )
            );
        }
    }]);

    return Portfolio;
}(_react.Component);

exports.default = {
    component: Portfolio
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(1);

var _reactTransitionGroup = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var duration = 350;

var defaultStyle = {
    transition: 'opacity ' + duration + 'ms ease-in-out',
    opacity: 0
};

var transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 }
};

var Services = function (_Component) {
    _inherits(Services, _Component);

    function Services(props) {
        _classCallCheck(this, Services);

        var _this = _possibleConstructorReturn(this, (Services.__proto__ || Object.getPrototypeOf(Services)).call(this, props));

        _this.state = {
            show: false
        };
        return _this;
    }

    _createClass(Services, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ show: true });
        }
    }, {
        key: 'render',
        value: function render() {
            var show = this.state.show;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement(
                        'title',
                        null,
                        'Ben Harrington: What I Can Do For You'
                    ),
                    _react2.default.createElement('meta', { property: 'og:title', content: 'Ben Harrington\'s Services' }),
                    _react2.default.createElement('meta', { property: 'og:type', content: 'website' }),
                    _react2.default.createElement('meta', { property: 'og:url', content: 'http://www.ben-harrington.com' }),
                    _react2.default.createElement('meta', { property: 'og:image', content: 'http://www.ben-harrington.com/imgs/b-logo.svg' }),
                    _react2.default.createElement('meta', { property: 'og:description', content: 'Website Design, SEO, App Development, the list goes on!' })
                ),
                _react2.default.createElement(
                    _reactTransitionGroup.Transition,
                    { 'in': !!show, timeout: duration },
                    function (state) {
                        return _react2.default.createElement(
                            'div',
                            { className: 'page-services', style: _extends({}, defaultStyle, transitionStyles[state]) },
                            _react2.default.createElement(
                                'ul',
                                null,
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'card-serv' },
                                        _react2.default.createElement(
                                            'h3',
                                            null,
                                            'Static Websites'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'A fixed storefront or display for your business or product. This is perfect if you don\'t need any special features or dynamic content -- just display the product and let it speak for itself.'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'card-serv' },
                                        _react2.default.createElement(
                                            'h3',
                                            null,
                                            'Fully Featured Web Apps'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'If you need specific, custom features so your product or experience can shine: live chat, development blog, forms, user accounts, just-for-fun features, or anything else you can dream up, a fully featured web app is for you! Best served up with React!'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'card-serv' },
                                        _react2.default.createElement(
                                            'h3',
                                            null,
                                            'Search Engine Optimization'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Don\'t miss out on customers or traffic that you should be drawing in! Modern SEO techniques are constantly changing, and standards are being raised. ',
                                            _react2.default.createElement('br', null),
                                            ' ',
                                            _react2.default.createElement('br', null),
                                            'Taking advantage of the most current SEO techniques will help your site show up first on all search engines, and help you draw in users that may otherwise end up choosing your competitors!'
                                        )
                                    )
                                )
                            )
                        );
                    }
                )
            );
        }
    }]);

    return Services;
}(_react.Component);

exports.default = {
    component: Services
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(1);

var _axios = __webpack_require__(17);

var _axios2 = _interopRequireDefault(_axios);

var _EmailForm = __webpack_require__(18);

var _EmailForm2 = _interopRequireDefault(_EmailForm);

var _reactTransitionGroup = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var duration = 500;

var defaultStyle = {
    transition: 'opacity ' + duration + 'ms ease-out'
};

var transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 }
};

var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
};

function escapeHtml(string) {
    return String(string).replace(/[&<>"'`=/]/g, function (s) {
        return entityMap[s];
    });
}

var Contact = function (_Component) {
    _inherits(Contact, _Component);

    function Contact(props) {
        _classCallCheck(this, Contact);

        var _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));

        _this.state = {
            show: false
        };

        //this.handleSubmit = this.handleSubmit.bind(this);
        return _this;
    }

    _createClass(Contact, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ show: true });
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

    }, {
        key: 'render',
        value: function render() {
            var show = this.state.show;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement(
                        'title',
                        null,
                        'Ben Harrington: Get in Touch!'
                    ),
                    _react2.default.createElement('meta', { property: 'og:title', content: 'Get in touch!' }),
                    _react2.default.createElement('meta', { property: 'og:type', content: 'website' }),
                    _react2.default.createElement('meta', { property: 'og:url', content: 'http://www.ben-harrington.com' }),
                    _react2.default.createElement('meta', { property: 'og:image', content: 'http://www.ben-harrington.com/imgs/b-logo.svg' }),
                    _react2.default.createElement('meta', { property: 'og:description', content: 'Drop me a line to find out about the solutions I can provide for you!' })
                ),
                _react2.default.createElement(
                    _reactTransitionGroup.Transition,
                    { 'in': !!show, timeout: duration },
                    function (state) {
                        return _react2.default.createElement(
                            'div',
                            { className: 'page-contact', style: _extends({}, defaultStyle, transitionStyles[state]) },
                            _react2.default.createElement(
                                'h3',
                                null,
                                'Questions or comments?'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                'If you\'d like to start a dialog about the solutions I can provide for you, please feel free to drop me a message!',
                                _react2.default.createElement('br', null),
                                _react2.default.createElement('br', null)
                            ),
                            _react2.default.createElement(
                                'h3',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'mailto:contact@ben-harrington.com' },
                                    'Contact@Ben-Harrington.com'
                                )
                            )
                        );
                    }
                )
            );
        }
    }]);

    return Contact;
}(_react.Component);

;

exports.default = {
    component: Contact
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
};

function escapeHtml(string) {
    return String(string).replace(/[&<>"'`=/]/g, function (s) {
        return entityMap[s];
    });
}

var EmailForm = function (_Component) {
    _inherits(EmailForm, _Component);

    function EmailForm(props) {
        _classCallCheck(this, EmailForm);

        var _this = _possibleConstructorReturn(this, (EmailForm.__proto__ || Object.getPrototypeOf(EmailForm)).call(this, props));

        _this.state = {
            subject: '',
            subjectValid: false,
            message: '',
            messageValid: false,
            email: '',
            emailValid: false,

            showEmailNotice: false,
            showSubjectNotice: false,
            showMessageNotice: false
        };

        _this.handleSubjectChange = _this.handleSubjectChange.bind(_this);
        _this.handleSubjectBlur = _this.handleSubjectBlur.bind(_this);

        _this.handleMessageChange = _this.handleMessageChange.bind(_this);
        _this.handleMessageBlur = _this.handleMessageBlur.bind(_this);

        _this.handleEmailChange = _this.handleEmailChange.bind(_this);
        _this.handleEmailBlur = _this.handleEmailBlur.bind(_this);
        return _this;
    }

    _createClass(EmailForm, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            if (this.props.Submit) {
                if (this.state.subjectValid && this.state.messageValid && this.state.emailValid) {
                    var mymsg = escapeHtml(this.state.message);
                    mymsg = mymsg.replace(/\n/g, " ");

                    this.props.Submit(e, escapeHtml(this.state.subject), escapeHtml(this.state.email), mymsg);
                } else {
                    alert('Submit failed! Please correct the errors shown in the form.');
                }
            }
        }
    }, {
        key: 'handleSubjectChange',
        value: function handleSubjectChange(e) {
            e.preventDefault();
            var newStr = e.target.value;
            if (newStr.length > 130 || newStr.length === 0) {
                this.setState({ subjectValid: false, subject: newStr });
            } else {
                this.setState({ subjectValid: true, subject: newStr });
            }
        }
    }, {
        key: 'handleMessageChange',
        value: function handleMessageChange(e) {
            e.preventDefault();
            var newStr = e.target.value;
            if (newStr.length < 24 || newStr.length > 4096) {
                this.setState({ messageValid: false, message: newStr });
            } else {
                this.setState({ messageValid: true, message: newStr });
            }
        }
    }, {
        key: 'handleEmailChange',
        value: function handleEmailChange(e) {
            e.preventDefault();
            var newStr = escapeHtml(e.target.value);

            if (!/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/.test(newStr)) {
                this.setState({ email: newStr, emailValid: false });
            } else {
                this.setState({ email: newStr, emailValid: true });
            }
        }
    }, {
        key: 'handleEmailBlur',
        value: function handleEmailBlur(e) {
            if (this.state.emailValid) {
                e.target.style = 'border: none';
                this.setState({ showEmailNotice: false });
            } else {
                e.target.style = 'border: 1px solid red';
                this.setState({ showEmailNotice: true });
            }
        }
    }, {
        key: 'handleSubjectBlur',
        value: function handleSubjectBlur(e) {
            if (this.state.subjectValid) {
                e.target.style = 'border: none';
                this.setState({ showSubjectNotice: false });
            } else {
                e.target.style = 'border: 1px solid red';
                this.setState({ showSubjectNotice: true });
            }
        }
    }, {
        key: 'handleMessageBlur',
        value: function handleMessageBlur(e) {
            if (this.state.messageValid) {
                e.target.style = 'border: none';
                this.setState({ showMessageNotice: false });
            } else {
                e.target.style = 'border: 1px solid red';
                this.setState({ showMessageNotice: true });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'form',
                    { onSubmit: function onSubmit(e) {
                            return _this2.handleSubmit(e);
                        } },
                    _react2.default.createElement('input', {
                        type: 'email',
                        name: 'email',
                        placeholder: 'Your email',
                        value: this.state.email,
                        onBlur: function onBlur(e) {
                            return _this2.handleEmailBlur(e);
                        },
                        onFocus: function onFocus(e) {
                            e.target.style = 'border: none';_this2.setState({ showEmailNotice: false });
                        },
                        onChange: function onChange(e) {
                            return _this2.handleEmailChange(e);
                        } }),
                    this.state.showEmailNotice ? _react2.default.createElement(
                        'strong',
                        null,
                        '* Please enter a valid email!'
                    ) : null,
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('input', {
                        type: 'text',
                        name: 'subject',
                        placeholder: 'Subject',
                        value: this.state.subject,
                        onBlur: function onBlur(e) {
                            return _this2.handleSubjectBlur(e);
                        },
                        onFocus: function onFocus(e) {
                            e.target.style = 'border: none';_this2.setState({ showSubjectNotice: false });
                        },
                        onChange: function onChange(e) {
                            return _this2.handleSubjectChange(e);
                        } }),
                    this.state.showSubjectNotice ? _react2.default.createElement(
                        'strong',
                        null,
                        '* Length must be greater than 0 and less than 130!'
                    ) : null,
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('textarea', { name: 'message',
                        placeholder: 'Message...',
                        value: this.state.message,
                        onBlur: function onBlur(e) {
                            return _this2.handleMessageBlur(e);
                        },
                        onFocus: function onFocus(e) {
                            e.target.style = 'border: none';_this2.setState({ showMessageNotice: false });
                        },
                        onChange: function onChange(e) {
                            return _this2.handleMessageChange(e);
                        } }),
                    this.state.showMessageNotice ? _react2.default.createElement(
                        'strong',
                        null,
                        '* Length must be greater than 24 and less than 4096!'
                    ) : null,
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('input', { className: 'button-sub', type: 'submit', name: 'submit', value: 'Submit', onSubmit: function onSubmit(e) {
                            return _this2.handleSubmit(e);
                        } })
                )
            );
        }
    }]);

    return EmailForm;
}(_react.Component);

exports.default = EmailForm;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
    var _ref$staticContext = _ref.staticContext,
        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

    staticContext.notFound = true;

    return _react2.default.createElement(
        'div',
        { className: 'not-found', style: { marginTop: '200px' } },
        _react2.default.createElement(
            'h1',
            null,
            'Oops! Route not found!'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Click ',
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/' },
                'here'
            ),
            ' to go back to the home page!'
        )
    );
};

exports.default = {
    component: NotFoundPage
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(4);

var _Header = __webpack_require__(21);

var _Header2 = _interopRequireDefault(_Header);

var _actions = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        (0, _reactRouterConfig.renderRoutes)(route.routes)
    );
};

exports.default = {
    component: App
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(6);

var _reactTransitionGroup = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var duration1 = 250;
var duration2 = 500;

var defaultStyle = {
    transition: 'opacity ' + duration1 + 'ms ease-out',
    opacity: 0.01
};

var transitionStyles = {
    entering: { opacity: 0.01 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0.01 }
};

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.state = {
            show: false
        };
        return _this;
    }

    _createClass(Header, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ show: true });
        }
    }, {
        key: 'render',
        value: function render() {
            var show = this.state.show;


            return _react2.default.createElement(
                _reactTransitionGroup.Transition,
                { 'in': show, timeout: duration1 },
                function (state) {
                    return _react2.default.createElement(
                        'div',
                        { style: _extends({}, defaultStyle, transitionStyles[state]) },
                        _react2.default.createElement(
                            'div',
                            { className: 'nav-wrapper' },
                            _react2.default.createElement(
                                _reactTransitionGroup.Transition,
                                { 'in': show, timeout: duration1 },
                                function (state) {
                                    return _react2.default.createElement(
                                        'div',
                                        { className: 'nav-container', style: _extends({}, defaultStyle, transitionStyles[state]) },
                                        _react2.default.createElement(
                                            'h1',
                                            null,
                                            _react2.default.createElement(
                                                _reactRouterDom.Link,
                                                { to: '/', className: 'home-logo' },
                                                _react2.default.createElement('img', { src: 'imgs/b-logo.svg' }),
                                                _react2.default.createElement(
                                                    'h2',
                                                    null,
                                                    'en Harrington Web Design'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            _reactTransitionGroup.Transition,
                                            { 'in': show, timeout: duration2 },
                                            function (state) {
                                                return _react2.default.createElement(
                                                    'div',
                                                    { className: 'nav-buttons', style: _extends({}, defaultStyle, transitionStyles[state]) },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        null,
                                                        _react2.default.createElement(
                                                            _reactRouterDom.Link,
                                                            { to: '/portfolio' },
                                                            _react2.default.createElement(
                                                                'li',
                                                                { id: '1' },
                                                                'Portfolio'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            _reactRouterDom.Link,
                                                            { to: '/services' },
                                                            _react2.default.createElement(
                                                                'li',
                                                                { id: '2' },
                                                                'Services'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            _reactRouterDom.Link,
                                                            { to: '/contact' },
                                                            _react2.default.createElement(
                                                                'li',
                                                                { id: '3' },
                                                                'Contact'
                                                            )
                                                        )
                                                    )
                                                );
                                            }
                                        )
                                    );
                                }
                            )
                        )
                    );
                }
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = (0, _reactRedux.connect)()(Header);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(23);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(6);

var _reactRouterConfig = __webpack_require__(4);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _serializeJavascript = __webpack_require__(24);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.path, context: context },
            _react2.default.createElement(
                'div',
                null,
                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
            )
        )
    ));

    var helmet = _reactHelmet.Helmet.renderStatic();

    return '<html>\n            <head>\n                ' + helmet.title.toString() + '\n                ' + helmet.meta.toString() + '\n                <link href="https://fonts.googleapis.com/css?family=Lato:100,300,300i,400,700,900" rel="stylesheet">\n                <link href="https://fonts.googleapis.com/css?family=Oswald:200" rel="stylesheet">\n                <link rel="stylesheet" href="styles/css/styles.css">\n                <link rel=\'shortcut icon\' type=\'image/x-icon\' href=\'/favicon.ico\' />\n            </head>\n            <body>\n                <div id="root">' + content + '</div>\n                <script>\n                    window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n                </script>\n                <script src="bundle.js"></script>\n            </body>\n        </html>';
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _reducers = __webpack_require__(26);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
    var store = (0, _redux.createStore)(_reducers2.default, {});

    return store;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _postsReducer = __webpack_require__(27);

var _postsReducer2 = _interopRequireDefault(_postsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    posts: _postsReducer2.default
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(7);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_POSTS:
            return action.payload.data;
        default:
            return state;
    }
};

/***/ })
/******/ ]);