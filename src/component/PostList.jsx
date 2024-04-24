import Post from "./Post";

const PostList = () => {
    return (
        <div>
            <ul>
            <Post author='Norbi' body='Lorem Ipsum' />
            <Post author='Betti' body='Lorem Ipsum' />
            </ul>
        </div>
    );
};

export default PostList;