function RHFSelect({ label, name, register, options, required, errors }) {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);

  return (
    <div>
      <div>
        <label htmlFor={name} className="mb-2 block text-secondary-700">
          {label} {required && <span className="text-error">*</span>}
        </label>
        <select {...register(name)} id={name} className="textField__input">
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <span
        className={`${
          errors && errors[name] ? "text-red-600" : "text-transparent"
        } block text-xs mt-1 mb-2`}
      >
        {errors && errors[name] ? errors[name]?.message : "!"}
      </span>
    </div>
  );
}
export default RHFSelect;
