import React, { Component } from 'react'
import PropTypes from 'prop-types'



class CommentInput extends Component {
    static propTypes = {
        onSubmit:PropTypes.func
    }

    constructor(){
        super();
        this.state = {
            username:'',
            content:''
        }
    }


    componentWillMount(){
        this._loadUsername();
    }

    _loadUsername(){
        const username = localStorage.getItem('username');
        if(username){
            this.setState({username})
        }
    }

    _saveUsername = (username)=>{
        localStorage.setItem('username',username)
    }

    handleUsernameBlur = (event)=>{
        this._saveUsername(event.target.value)
    }

    componentDidMoout(){
        this.textarea.focus();
    }

    handleUsernameChange = (event)=>{
        this.setState({
            username:event.target.value
        })
    }

    handleContentChange = (event)=>{
        this.setState({
            content:event.target.value
        })
    }

    handleSubmit = (event)=>{
        if(this.props.onSubmit){
            const {username,content} = this.state;
            this.props.onSubmit({
                username:this.state.username,
                content:this.state.content,
                createdTime:+new Date()
            })
            this.setState({ content: '' })
        }
    }



    render () {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username}
                               onChange={this.handleUsernameChange}
                               onBlur={this.handleUsernameBlur}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea
                            value={this.state.content}
                            onChange={this.handleContentChange}
                            ref={(textarea)=>{this.textarea = textarea}}
                        />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput