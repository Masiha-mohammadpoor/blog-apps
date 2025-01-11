import { getAllUsers } from "@/services/authServices";
import { useQuery } from "@tanstack/react-query";

export function useUsers() {
  const { data, isPending } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  return { isPending, data};
}
