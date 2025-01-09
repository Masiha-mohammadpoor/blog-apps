"use client"

import { useComments } from "@/hooks/useComments";
import { Suspense } from "react";
import CommentTable from "./commentTable";
import Spinner from "@/ui/Spinner";

const comments = () => {
  const {data,isPending} = useComments();

  return (<div>
    <Suspense fallback={<Spinner/>}>
      <CommentTable/>
    </Suspense>
  </div>);
}
 
export default comments;