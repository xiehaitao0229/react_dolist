import React,{Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import PropTypes from 'prop-types'
import wrapWithLoadData from './wrapWithLoadData';

class CommentApp extends Component{
    static propTypes = {
        data:PropTypes.any,
        saveData:PropTypes.func.isRequired
    }


    constructor(props){
        super(props);
        this.state = {
           comments:props.data
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
        this.props.saveData(comments)
    }

    handleDeleteComment = (index)=>{
        console.log(index);
        const comments = this.state.comments;
        comments.splice(index,1);
        this.setState({comments});
        this.props.saveData(comments);
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

CommentApp = wrapWithLoadData(CommentApp,'comments');

export default CommentApp;  //  导出组件