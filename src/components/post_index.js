import React,{Component} from 'react';
import fetchPosts from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';


class PostIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                <Link to={`/posts/${post.id}`}>
                    {post.title}
                </Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="">
                    <Link className="btn btn-warning" to="/posts/new">Add a Post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({posts}) {
    return {posts}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);