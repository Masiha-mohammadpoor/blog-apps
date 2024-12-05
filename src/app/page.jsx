import Link from "next/link";

export default function Home() {
  return (
    <section className="mt-10 flex justify-center flex-col items-center gap-y-10">
      <h1 className="font-semibold text-4xl">اپلیکیشن مدیریت بلاگ</h1>
      <p className="text-center leading-7">
        جایی که قراره بتونی یه اپلیکیشن بلاگ کامل رو مدیریت کنی!
        <br />
        بتونی بلاگ بسازی - کامنت بذاری و در پنلت همه اتفاقات رو رصد کنی!
      </p>
      <div className="flex gap-x-5">
        <Link href="/blogs">
          <button className="btn btn--outline">مطالعه بلاگ‌ها</button>
        </Link>
        <button className="btn btn--primary">مدیریت بلاگ‌ها</button>
      </div>
    </section>
  );
}
