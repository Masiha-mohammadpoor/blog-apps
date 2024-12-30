import { HiArrowUpTray } from "react-icons/hi2";

function FileInput({
  label,
  name,
  value,
  dir = "rtl",
  onChange,
  className,
}) {
  return (
    <label
      htmlFor="file-upload"
      className={`cursor-pointer border-2 border-primary-900 rounded-lg px-3 py-2 text-primary-900 flex justify-center items-center gap-x-2 ${className}`}
    >
      {label}
      <HiArrowUpTray className="w-5 h-5" />
      <input
        required
        type="file"
        id="file-upload"
        className="w-0"
        name={name}
        dir={dir}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default FileInput;
