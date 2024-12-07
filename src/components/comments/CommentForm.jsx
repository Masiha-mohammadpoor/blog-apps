"use client";

import { createComment } from "@/lib/actions";
import SpinnerButton from "@/ui/SpinnerButton";
import { useState } from "react";

const CommentForm = ({ postId }) => {
  const [text, setText] = useState("");

  const createCommentData = createComment.bind(null, postId);

  return (
    <div>
      <form
        action={createCommentData}
        className="flex flex-col justify-start items-start"
        onSubmit={() => setText("")}
      >
        <textarea
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="نظر خود را بنویسید..."
          className="resize-none w-full bg-secondary-200 shadow-xl rounded-md p-4 h-32"
        ></textarea>
        <SpinnerButton />
      </form>
    </div>
  );
};

export default CommentForm;
