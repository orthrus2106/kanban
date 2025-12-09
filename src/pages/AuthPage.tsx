import { Link } from 'react-router';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';

import AuthLayout from '../layouts/AuthLayout';
import AuthCard from '../components/auth/AuthCard';
import AuthForm from '../components/auth/AuthForm';
import AuthInput from '../components/auth/AuthInput';
import AuthButton from '../components/auth/AuthButton';

import { useLoginMutation } from '../store/services/authApi';
import type { LoginRequest } from '../types/login';

interface Values {
  email: string;
  password: string;
}

const AuthPage = () => {
  const [login, { isLoading, isError, data }] = useLoginMutation();
  const navigate = useNavigate();

  const handleLogin = async (values: LoginRequest) => {
    try {
      const result = await login(values).unwrap();
      localStorage.setItem('token', result.token);
      console.log('Successful', result);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik<Values>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  return (
    <AuthLayout>
      <AuthCard
        title="Sign in"
        subtitle={
          <>
            Not registered yet?{' '}
            <Link
              to="/register"
              className="font-semibold text-blue-600 hover:text-blue-700 transition duration-150"
            >
              create an account
            </Link>
          </>
        }
      >
        <AuthForm onSubmit={formik.handleSubmit}>
          <div className="space-y-6">
            {' '}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <AuthInput
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700"
              >
                Password
              </label>
              <AuthInput
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                required
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {isError && (
              <p className="text-red-500">Error while authorisation</p>
            )}
            <AuthButton disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign in'}
            </AuthButton>
          </div>
        </AuthForm>
      </AuthCard>
    </AuthLayout>
  );
};

export default AuthPage;
