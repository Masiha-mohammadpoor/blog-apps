import Button from "@/ui/Button";
import Avatar from "../Avatar";
import { IoArrowRedoOutline } from "react-icons/io5";

function Comment({ comment }) {
  return (
    <>
      <div className="flex items-center justify-between mb-5 border-b border-b-secondary-200/60 pb-2">
        <div className="flex items-center ">
          <Avatar
            height={34}
            width={34}
            alt={comment.user?.name || "-"}
            src={comment.user.avatarUrl}
          />
          <div className="text-sm w-full text-secondary-600 mr-2">
            <span className="font-bold block mb-1">{comment.user.name}</span>
            <span className="block text-secondary-500 text-xs">
              {comment.createdAt}
            </span>
          </div>
        </div>
        <div>
          {comment.openToComment && (
            <Button
              // onClick={onAddComment}
              variant="secondary"
              className="text-sm flex items-center gap-x-1 p-1 rounded-lg text-secondary-500 bg-secondary-200"
            >
              <span className="ml-1">
                <IoArrowRedoOutline/>
              </span>
              <span>پاسخ</span>
            </Button>
          )}
        </div>
      </div>
      <p className="text-secondary-700 leading-loose lg:leading-8 text-xs lg:text-base">
        {comment.content.text}
      </p>
    </>
  );
}
export default Comment;

//   return (
  //   <div className="mb-10">
  //     <div className="flex flex-col items-center lg:flex-row justify-between gap-y-3 mb-8">
  //       <h2 className="text-2xl font-bold text-secondary-800">نظرات</h2>
  //       <button
  //         onClick={() => addNewCommentHandler(null)}
  //         variant="outline"
  //         className="flex items-center py-2"
  //       >
  //         <QuestionMarkCircleIcon className="w-4 ml-2" />
  //         <span>ثبت نظر جدید</span>
  //       </button>
  //       <Modal
  //         title={parent ? "پاسخ به نظر" : "نظر جدید"}
  //         description={parent ? parent.user.name : "نظر خود را وارد کنید"}
  //         open={isOpen}
  //         onClose={() => setOpen(false)}
  //       >
  //         <CommentForm
  //           postId={postId}
  //           parentId={parent ? parent._id : null}
  //           onClose={() => setOpen(false)}
  //         />
  //       </Modal>
  //     </div>
  //     <div className="space-y-8 post-comments bg-secondary-0 rounded-xl py-6 px-3 lg:px-6 ">
  //       {comments.length > 0 ? (
  //         comments.map((comment) => {
  //           return (
  //             <div key={comment._id}>
  //               <div className="border border-secondary-200 rounded-xl p-2 sm:p-4 mb-3">
  //                 <Comment
  //                   comment={comment}
  //                   onAddComment={() => addNewCommentHandler(comment)}
  //                 />
  //               </div>
  //               <div className="post-comments__answer mr-2 sm:mr-8 space-y-3">
  //                 {comment.answers.map((item, index) => {
  //                   return (
  //                     <div key={item._id} className="relative">
  //                       <div
  //                         className={classNames(
  //                           "answer-item border border-secondary-100 bg-secondary-50/80 rounded-xl p-2 sm:p-4",
  //                           {
  //                             "last-item": index + 1 === comment.answers.length,
  //                           }
  //                         )}
  //                       >
  //                         <Comment comment={item} key={item._id} />
  //                       </div>
  //                     </div>
  //                   );
  //                 })}
  //               </div>
  //             </div>
  //           );
  //         })
  //       ) : (
  //         <p className="text-secondary-500">برای این پست نظری ثبت نشده است</p>
  //       )}
  //     </div>
  //   </div>
  // );
