import { useState } from "react";

import classes from "./NewPost.module.css";

const NewPost = () => {
  const [body, setBody] = useState('');

  function bodyChangeHandler(event) {
    setBody(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
        <p>{body}</p>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
};

export default NewPost;