import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchPost from '../actions/fetchPost';
import {Link} from 'react-router-dom';
import deletePost from '../actions/deletePost';

class PostShow extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);
        this.props.fetchPost(id);
    }

    onDelete = () => {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const {post} = this.props;

        if(!post) {
            return (
                <div>Loading..</div>
            );
        }


        return (
            <div>
                <Link to="/" className="btn btn-primary mt-5">Back to Home</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDelete}>Delete post</button>
                <h3>{post.title}</h3>
                <h4>{post.categories}</h4>
                <p>{post.content}</p>
            </div>
        );
    }
}


function mapStateToProps({posts}, ownProps) {
    console.log(posts[ownProps.match.params.id]);
    console.log(posts);
    return {post: posts[ownProps.match.params.id]}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPost, deletePost}, dispatch);
}

export default  connect(mapStateToProps, mapDispatchToProps)(PostShow);
