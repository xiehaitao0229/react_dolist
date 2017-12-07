import React,{Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import PropTypes from 'prop-types'

class CommentApp extends Component{
    componentWillMount(){
        this._loadComments();
    }

    _loadComments(){
        let comments = localStorage.getItem('comments');
        if(comments){
            comments = JSON.parse(comments);
            this.setState({comments});
        }
    }

    _saveComments(comments){
        localStorage.setItem('comments',JSON.stringify(comments));
    }



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
        const comments = this.state.comments;
        this.setState({
            comments
        })
        this._saveComments(comments)
    }

    handleDeleteComment = (index)=>{
        console.log(index);
        const comments = this.state.comments;
        comments.splice(index,1);
        this.setState({comments});
        this._saveComments(comments);
    }

    render(){

        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment} />
                <CommentList
                    comments={this.state.comments}
                    onDeleteComment={this.handleDeleteComment}
                />
            </div>
        )
    }
}


export default CommentApp;  //  导出组件