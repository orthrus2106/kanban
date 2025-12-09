import type { ReactNode, FormEvent } from 'react';

type Props = {
  children: ReactNode;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
};

const AuthForm = ({ children, onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {children}
    </form>
  );
};

export default AuthForm;
