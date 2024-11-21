"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <section className="flex flex-col justify-center items-center gap-y-4">
      <Image src="/images/404.svg" width={300} height={100} alt="404" />
      <h1 className="font-semibold text-xl">صفحه مورد نظر پیدا نشد!</h1>
      <button onClick={() => router.back()} className="btn btn--primary">
        برگشت به صفحه قبل
      </button>
    </section>
  );
};

export default NotFound;
