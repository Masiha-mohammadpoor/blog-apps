import Comment from "./Comment";
import CommentForm from "./CommentForm";

const CommentSection = ({ post: { comments, _id } }) => {
  return (
    <section>
      <h1 className="text-lg font-semibold mt-5 mb-3">نظرات</h1>
      <CommentForm />
      <div className="space-y-8 post-comments bg-secondary-0 rounded-xl py-6 px-3 lg:px-6 mt-5">
        {comments.length > 0 ? (
          comments.map((comment) => {
            return (
              <div key={comment._id}>
                <div className="border border-secondary-200 rounded-xl p-2 sm:p-4 mb-3">
                  <Comment
                    comment={comment}
                    onAddComment={() => addNewCommentHandler(comment)}
                  />
                </div>
                <div className="post-comments__answer mr-2 sm:mr-8 space-y-3">
                  {comment.answers.map((item, index) => {
                    return (
                      <div key={item._id} className="relative">
                        <div
                          className={`answer-item border border-secondary-100 bg-secondary-50/80 rounded-xl p-2 sm:p-4 ${
                            index + 1 === comment.answers.length && "last-item"
                          }`}
                        >
                          <Comment comment={item} key={item._id} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-secondary-500">برای این پست نظری ثبت نشده است</p>
        )}
      </div>
    </section>
  );
};

export default CommentSection;
