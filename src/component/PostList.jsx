import classes from './PostList.module.css';

import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';

const PostList = () => {
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  function onBodyChange(event) {
    setBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setAuthor(event.target.value);
  }

  return (
    <div>
      <Modal>
        <NewPost
          onBodyChange={onBodyChange}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post author={author} body={body} />
        <Post author='Betti' body='Lorem ipsuem' />
      </ul>
    </div>
  );
};

export default PostList;
