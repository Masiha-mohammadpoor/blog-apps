"use client";
import { useForm } from "react-hook-form";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "@/context/authContext";
import Link from "next/link";

const schema = yup
  .object({
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است"),
  })
  .required();

const Signin = () => {
  const { signin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = async (values) => {
    await signin(values);
  };
  return (
    <section className="sm:w-96 w-72 mx-auto mt-10">
      <h1 className="font-semibold text-3xl mb-5 text-primary-600">ورود</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          label="ایمیل"
          name="email"
          register={register}
          dir="ltr"
          errors={errors}
        />
        <RHFTextField
          label="رمز عبور"
          name="password"
          register={register}
          type="password"
          dir="ltr"
          errors={errors}
        />
        <button className="w-full btn btn--primary mt-5">ورود</button>
      </form>
      <Link href="/signup" className="text-center mt-10 text-primary-900">قبلا ثبت‌نام نکرده‌اید؟</Link>
    </section>
  );
};

export default Signin;
