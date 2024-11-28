"use client";
import { useForm } from "react-hook-form";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { signinUser } from "@/services/authServices";
import toast from "react-hot-toast";

export const metaData = {
  title: "ورود",
};

const schema = yup.object({
  email : yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
  password : yup.string().required("رمز عبور الزامی است")

}).required();


const Signin = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema),
    mode:"onTouched"
  });

  const onSubmit = async (values) => {
    try{
      const {message} = await signinUser(values);
      toast.success(message)
    }catch(err){
      toast.error(err?.response?.data?.message);
    }
  }
  return (
    <section className="w-96 mx-auto mt-10">
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
    </section>
  );
};

export default Signin;
