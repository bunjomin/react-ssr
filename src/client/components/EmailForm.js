import React, { Component } from 'react';

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

class EmailForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subject: '',
            subjectValid: false,
            message: '',
            messageValid: false,
            email: '',
            emailValid: false,

            showEmailNotice: false,
            showSubjectNotice: false,
            showMessageNotice: false
        }

        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleSubjectBlur = this.handleSubjectBlur.bind(this);

        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleMessageBlur = this.handleMessageBlur.bind(this);

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleEmailBlur = this.handleEmailBlur.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.props.Submit) {
            if(this.state.subjectValid && this.state.messageValid && this.state.emailValid) {
                var mymsg = escapeHtml(this.state.message);
                mymsg = mymsg.replace(/\n/g, " ");

                this.props.Submit(e, escapeHtml(this.state.subject), escapeHtml(this.state.email), mymsg);
            }
            else
            {
                alert('Submit failed! Please correct the errors shown in the form.');
            }
        }
    }

    handleSubjectChange(e) {
        e.preventDefault();
        var newStr = e.target.value;
        if(newStr.length > 130 || newStr.length === 0) {
            this.setState({subjectValid: false, subject: newStr});
        }
        else
        {
            this.setState({subjectValid: true, subject: newStr});
        }
    }

    handleMessageChange(e) {
        e.preventDefault();
        var newStr = e.target.value;
        if(newStr.length < 24 || newStr.length > 4096) {
            this.setState({messageValid: false, message: newStr});
        }
        else
        {
            this.setState({messageValid: true, message: newStr});
        }
    }

    handleEmailChange(e) {
        e.preventDefault();
        var newStr = escapeHtml(e.target.value);

        if(!/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/.test(newStr)) {
            this.setState({email: newStr, emailValid: false});
        }
        else {
            this.setState({email: newStr, emailValid: true});
        }
    }

    handleEmailBlur(e) {
        if(this.state.emailValid)
        {
            e.target.style = 'border: none';
            this.setState({showEmailNotice: false});
        }
        else
        {
            e.target.style = 'border: 1px solid red';
            this.setState({showEmailNotice: true});
        }
    }

    handleSubjectBlur(e) {
        if(this.state.subjectValid)
        {
            e.target.style = 'border: none';
            this.setState({showSubjectNotice: false});
        }
        else
        {
            e.target.style = 'border: 1px solid red';
            this.setState({showSubjectNotice: true});
        }
    }

    handleMessageBlur(e) {
        if(this.state.messageValid)
        {
            e.target.style = 'border: none';
            this.setState({showMessageNotice: false});
        }
        else
        {
            e.target.style = 'border: 1px solid red';
            this.setState({showMessageNotice: true});
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input 
                    type='email' 
                    name='email' 
                    placeholder='Your email' 
                    value={this.state.email} 
                    onBlur={(e) => this.handleEmailBlur(e)}
                    onFocus={(e) => {e.target.style = 'border: none'; this.setState({showEmailNotice: false})}}
                    onChange={(e) => this.handleEmailChange(e)}/>
                    {this.state.showEmailNotice ? <strong>* Please enter a valid email!</strong> : null}
                    <br />

                    <input 
                    type='text' 
                    name='subject' 
                    placeholder='Subject' 
                    value={this.state.subject} 
                    onBlur={(e) => this.handleSubjectBlur(e)}
                    onFocus={(e) => {e.target.style = 'border: none'; this.setState({showSubjectNotice: false})}}
                    onChange={(e) => this.handleSubjectChange(e)}/>
                    {this.state.showSubjectNotice ? <strong>* Length must be greater than 0 and less than 130!</strong> : null}
                    <br />

                    <textarea name='message'
                    placeholder='Message...'
                    value={this.state.message}
                    onBlur={(e) => this.handleMessageBlur(e)}
                    onFocus={(e) => {e.target.style = 'border: none'; this.setState({showMessageNotice: false})}}
                    onChange={(e) => this.handleMessageChange(e)}/>
                    {this.state.showMessageNotice ? <strong>* Length must be greater than 24 and less than 4096!</strong> : null}
                    <br />

                    <input className='button-sub' type='submit' name='submit' value='Submit' onSubmit={(e) => this.handleSubmit(e)}/>
                </form>
            </div>
        );
    }
}

export default EmailForm;