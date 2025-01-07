import { Suspense } from "react";
import CategoryList from "../CategoryList";
import Spinner from "@/ui/Spinner";
import Search from "@/ui/Search";

export default function Layout({ children }) {
  return (
    <main className="grid grid-cols-12 gap-8 mt-10 overflow-hidden">
      <section className="lg:col-span-3 max-h-60 hidden lg:block">
        <Suspense fallback={<Spinner />}>
          <CategoryList />
        </Suspense>
      </section>
      <section className="col-span-12 lg:col-span-9 w-screen grid grid-cols-12 lg:w-auto gap-8">
        <div className="col-span-12 flex justify-center">
          <Search />
        </div>
        <div className="col-span-12 grid grid-cols-12 px-2">{children}</div>
      </section>
    </main>
  );
}
