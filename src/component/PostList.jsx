import classes from "./PostList.module.css";

import Post from "./Post";
import NewPost from "./NewPost";

const PostList = () => {
    return (
        <div>
            <NewPost />
            <ul className={classes.posts}>
            <Post author='Norbi' body='Lorem Ipsum' />
            <Post author='Betti' body='Lorem Ipsum' />
            </ul>
        </div>
    );
};

export default PostList;