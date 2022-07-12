import React from "react";

const CommentInputs = ({ handleChange, handleSubmit, opinion }) => {
  return (
    <div>
      <h1>Comment Out</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name
          <input
            type="text"
            name="fullName"
            value={opinion.fullName}
            onChange={handleChange}
          />
        </label>
        <label>
          Your Opinion
          <input
            type="text"
            name="opinion"
            value={opinion.opinion}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Make Comment</button>
      </form>
    </div>
  );
};

export default CommentInputs;
