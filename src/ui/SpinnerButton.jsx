"use client";
import { useFormStatus } from "react-dom";
import Button from "./Button";
import SpinnerMini from "./SpinnerMini";

const SpinnerButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      type="submit"
      className="mt-4 flex justify-between items-center gap-x-3"
    >
      تایید
      {pending ? <SpinnerMini /> : ""}
    </Button>
  );
};

export default SpinnerButton;
