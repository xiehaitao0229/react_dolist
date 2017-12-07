import React,{Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

import ReactMixin from 'react-mixin';
import MixinLog from './mixin';

class CommentApp extends Component{
    constructor(){
        super();
        this.state = {
            comments :[]
        }
    }


    handleSubmitComment =(comment) =>{
        console.log(comment)
        if(!comment) return ;
        if(!comment.username) return alert('请输入用户名')
        if(!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment);
        this.setState({
            comments:this.state.comments
        })
    }

    render(){
        MixinLog.log();
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment} />
                <CommentList comments={this.state.comments} />
            </div>
        )
    }
}

ReactMixin(CommentApp.prototype,MixinLog);

export default CommentApp;  //  导出组件