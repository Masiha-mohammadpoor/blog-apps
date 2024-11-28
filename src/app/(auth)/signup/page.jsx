"use client";
import { useForm } from "react-hook-form";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export const metaData = {
  title: "ثبت نام",
};

const schema = yup.object({
  name: yup.string().required("نام و نام‌خانوادگی الزامی است"),
  email : yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
  password : yup.string().required("رمز عبور الزامی است")

}).required();


const Signup = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema),
    mode:"onTouched"
  });

  const onSubmit = (values) => {
    console.log(values)
  }
  return (
    <section className="w-96 mx-auto mt-10">
      <h1 className="font-semibold text-3xl mb-5 text-primary-600">ثبت نام</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          label="نام و نام‌خانوادگی"
          name="name"
          register={register}
          errors={errors}
        />
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
        <button className="w-full btn btn--primary mt-5">تایید</button>
      </form>
    </section>
  );
};

export default Signup;
