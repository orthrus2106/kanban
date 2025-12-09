import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
  subtitle?: ReactNode;
};

const AuthCard = ({ title, subtitle, children }: Props) => {
  return (
    <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-6 shadow-2xl transition duration-500 ease-in-out sm:p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          {title}
        </h1>

        {subtitle && <p className="mt-2 text-sm text-gray-500">{subtitle}</p>}
      </div>

      {children}
    </div>
  );
};

export default AuthCard;
