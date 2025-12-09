import type { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

const AuthInput = (props: Props) => {
  return (
    <input
      {...props}
      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-base text-gray-800 outline-none transition duration-200
        focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 focus:shadow-md disabled:bg-gray-50 disabled:cursor-not-allowed"
    />
  );
};

export default AuthInput;
