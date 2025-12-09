import { Link } from 'react-router';
import { useFormik } from 'formik';

import AuthLayout from '../layouts/AuthLayout';
import AuthCard from '../components/auth/AuthCard';
import AuthForm from '../components/auth/AuthForm';
import AuthInput from '../components/auth/AuthInput';
import AuthButton from '../components/auth/AuthButton';

interface Values {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage = () => {
  const formik = useFormik<Values>({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <AuthLayout>
      <AuthCard
        title="Create account"
        subtitle={
          <>
            Already have account?{' '}
            <Link
              to="/auth"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign In
            </Link>
          </>
        }
      >
        <AuthForm onSubmit={formik.handleSubmit}>
          <AuthInput
            type="text"
            name="userName"
            placeholder="Username"
            required
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <AuthInput
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <AuthInput
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <AuthInput
            type="password"
            name="confirmPassword"
            placeholder="Password"
            required
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <AuthButton>Sign up</AuthButton>
        </AuthForm>
      </AuthCard>
    </AuthLayout>
  );
};

export default RegisterPage;
