import { Suspense } from "react";
import CategoryList from "../CategoryList";
import Spinner from "@/ui/Spinner";
import Search from "@/ui/Search";

export default function Layout({ children }) {
  return (
    <main className="container grid grid-cols-12 gap-8 mt-10">
      <section className="col-span-3 bg-secondary-200 max-h-60">
        <Suspense fallback={<Spinner />}>
          <CategoryList />
        </Suspense>
      </section>
      <section className="col-span-9 grid grid-cols-12 gap-8">
        <div className="col-span-12">        <Search/>
        </div>
        {children}
      </section>
    </main>
  );
}
