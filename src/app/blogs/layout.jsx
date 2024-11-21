import { Suspense } from "react";
import CategoryList from "./CategoryList";
import Spinner from "@/ui/Spinner";

export default function Layout({ children }) {
  return (
    <main className="grid grid-cols-12 gap-4 mt-10">
      <section className="col-span-3 bg-red-400">
        <Suspense fallback={<Spinner />}>
          <CategoryList />
        </Suspense>
      </section>
      <section className="col-span-9 bg-blue-400">
        {children}
      </section>
    </main>
  );
}
