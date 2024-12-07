"use client";

import { createComment } from "@/lib/actions";
import SpinnerButton from "@/ui/SpinnerButton";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";

const initialState = {
  error: "",
  message: "",
};

const CommentForm = ({ postId }) => {
  const [text, setText] = useState("");
  const [state, formAction] = useActionState(createComment, initialState);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);


  return (
    <div>
      <form
        action={(formData) => {
         formAction({ formData, postId });
        }}
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
