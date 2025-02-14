import { getAllCategories } from "@/services/categoryServices";
import { useQuery } from "@tanstack/react-query";

export function useCategories() {
  const { data, isPending } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  const { categories: rawCategories = [] } = data || {};

  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));
  return { isPending, categories , data};
}
