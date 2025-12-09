type Props = {
  children: string;
  disabled?: boolean;
};

const AuthButton = ({ children, disabled }: Props) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="w-full rounded-lg bg-blue-600 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/50 transition duration-200 
        hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};

export default AuthButton;
