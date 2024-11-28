const btnType = {
  primary:
    "bg-primary-300 text-primary-800 hover:bg-primary-800 hover:text-white",
  secondary:
    "bg-secondary-300 text-secondary-600 hover:bg-secondary-600 hover:text-white",
  error: "bg-red-200 text-red-600 hover:bg-red-600 hover:text-white",
};

const ButtonIcon = ({ children, variant, onClick , ...rest}) => {
  return (
    <button
      onClick={onClick}
      className={`${btnType[variant]} h-8 px-2 rounded-md flex justify-center items-center gap-x-2 transition-all duration-300`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
