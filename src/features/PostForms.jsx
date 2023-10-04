import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./PostSlice";

function PostForms() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (name && message) {
      dispatch(
        postAdded({
          id: nanoid(),
          name,
          message,
        })
      );

      setName("");
      setMessage("");
    }
  };

  return (
    <section className="form_details">
      <h4>Redux example Form</h4>
      <form className="form" onSubmit={submit}>
        <p className="name">
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p className="post">
          <textarea
            rows={1}
            cols={22}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="type here to post"
          ></textarea>
        </p>
        <p className="button"></p>
        <button type="submit">submit</button>
      </form>
    </section>
  );
}

export default PostForms;
