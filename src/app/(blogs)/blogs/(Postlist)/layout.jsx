"use client";
import { Suspense, useEffect } from "react";
import CategoryList from "../CategoryList";
import Spinner from "@/ui/Spinner";
import Search from "@/ui/Search";
import { HiMiniXMark } from "react-icons/hi2";
import useLocalStorage from "use-local-storage";

export default function Layout({ children }) {
  const [openMenu, setOpenMenu] = useLocalStorage("openMenu", false);

  useEffect(() => {
    setOpenMenu(false)
  } , [])

  return (
    <main className="grid grid-cols-12 gap-8 mt-10 overflow-hidden">
      <section
        className={`transition-all duration-300 lg:col-span-3 lg:max-h-60 h-screen min-w-60 lg:w-auto z-40 lg:z-0 row-start-1 col-start-1 bg-secondary-300 lg:bg-transparent fixed lg:static top-0  ${
          openMenu ? "right-0" : "-right-64"
        } pt-10 lg:pt-0 pl-3`}
      >
        <div className="lg:hidden">
          <button
            className="w-full flex justify-end"
            onClick={() => setOpenMenu(false)}
          >
            <HiMiniXMark className="w-8 h-8 text-red-400" />
          </button>
        </div>

        <Suspense fallback={<Spinner />}>
          <CategoryList />
        </Suspense>
      </section>
      <section className="col-span-12 lg:col-span-9 w-screen grid grid-cols-12 lg:w-auto gap-8 row-start-1 col-start-1 lg:col-start- z-20 lg:z-0">
        <div className="col-span-12 flex justify-center">
          <Search />
        </div>
        <div className="col-span-12 grid grid-cols-12 px-2">{children}</div>
      </section>
    </main>
  );
}
