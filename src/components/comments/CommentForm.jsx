const CommentForm = () => {
  return (
    <div>
      <form className="flex flex-col justify-start items-start">
        <textarea
          placeholder="نظر خود را بنویسید..."
          className="resize-none w-full bg-secondary-200 shadow-xl rounded-md p-4 h-32"
        ></textarea>
        <button className="btn btn--primary mt-4">ثبت نظر</button>
      </form>
    </div>
  );
};

export default CommentForm;
