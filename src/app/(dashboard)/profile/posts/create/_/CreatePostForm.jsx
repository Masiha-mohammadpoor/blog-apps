"use client";
import ButtonIcon from "@/components/ButtonIcon";
import { useCategories } from "@/hooks/useCategories";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { HiMiniXMark } from "react-icons/hi2";
import { useState } from "react";
import TextField from "@/ui/TextField";
import FileInput from "@/ui/FileInput";
import Button from "@/ui/Button";
import { useRouter } from "next/navigation";
import useCreatePost from "@/hooks/useCreatePost";

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان ضروری است"),
    briefText: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    text: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    slug: yup.string().required("اسلاگ ضروری است"),
    readingTime: yup
      .number()
      .positive()
      .integer()
      .required("زمان مطالعه ضروری است")
      .typeError("یک عدد را وارد کنید"),
    category: yup.string().required("دسته بندی ضروری است"),
  })
  .required();

const CreatePostForm = () => {
  const {createPost} = useCreatePost();
  const router = useRouter();
  const [coverImageUrl, setCoverImageUrl] = useState(null);
  const { categories } = useCategories();
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
    reset,
    control
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });


  const onSubmit = async (data) => {
    const formData = new FormData();

    for(const key in data) {
      formData.append(key , data[key]);
    }

    createPost(formData , {
      onSuccess:() => {
        router.push("/profile/posts")
      }
    })
  }


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
        label="متن کوتاه"
        name="briefText"
        register={register}
        required
        errors={errors}
      />
      <RHFTextField
        label="متن"
        name="text"
        register={register}
        required
        errors={errors}
      />
      <RHFTextField
        label="اسلاگ"
        name="slug"
        register={register}
        required
        errors={errors}
      />
      <RHFTextField
        label="زمان مطالعه"
        name="readingTime"
        register={register}
        required
        errors={errors}
      />
      <RHFSelect
        label="دسته بندی"
        name="category"
        register={register}
        required
        options={categories}
        errors={errors}
      />
      <Controller
        control={control}
        name="coverImage"
        rules={{ required: "عکس کاور پست الزامی است" }}
        render={({ field: { value, onChange, ...rest } }) => {
          return (
            <FileInput
              label="انتخاب کاور پست"
              name="coverImage"
              {...rest}
              value={value?.fileName}
              onChange={(event) => {
                const file = event.target.files[0];
                onChange(file);
                setCoverImageUrl(URL.createObjectURL(file));
                event.target.value = null;
              }}
            />
          );
        }}
      />

      {coverImageUrl && (
        <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
          <Image
            className="object-cover object-center"
            fill
            alt="cover-iamge"
            src={coverImageUrl}
            unoptimized
          />
          <ButtonIcon
            onClick={() => {
              setCoverImageUrl(null);
              setValue("coverImage", null);
            }}
            variant="error"
            className="w-6 h-6 absolute left-0 text-lg"
          >
            <HiMiniXMark />
          </ButtonIcon>
        </div>
      )}

      <button type="submit" onClick={handleSubmit(onSubmit)}>تایید</button>
    </form>
  );
};

export default  CreatePostForm;
