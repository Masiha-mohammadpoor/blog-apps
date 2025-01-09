import { getAllComments } from "@/services/commentService";
import { useQuery } from "@tanstack/react-query";

export function useComments() {
  const { data, isPending } = useQuery({
    queryKey: ["comments"],
    queryFn: getAllComments,
  });

  return { isPending , data};
}
