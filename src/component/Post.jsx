import classes from "./Post.module.css";

import PropTypes from 'prop-types';

const Post = (props) => {
    return (
        <li className={classes.post}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
        </li>
    );
};

// Property type validation
Post.propTypes = {
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default Post;