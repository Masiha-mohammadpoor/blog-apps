"use client";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import useCreateCategory from "@/hooks/useCreateCategory";

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان ضروری است"),
    englishTitle: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان انگلیسی ضروری است"),
    description: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
  })
  .required();

const CreateCategoryForm = () => {
  const { createCategory } = useCreateCategory();
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    createCategory(data, {
      onSuccess: () => {
        router.push("/profile/categories");
        reset();
      },
    });
  };

  return (
    <form className="form">
      <RHFTextField
        label="عنوان"
        name="title"
        register={register}
        required
        errors={errors}
      />
      <RHFTextField
        label="عنوان‌انگلیسی"
        name="englishTitle"
        register={register}
        required
        errors={errors}
      />
      <RHFTextField
        label="توضیحات"
        name="description"
        register={register}
        required
        errors={errors}
      />
      <button className="button" type="submit" onClick={handleSubmit(onSubmit)}>
        تایید
      </button>
    </form>
  );
};

export default CreateCategoryForm;
