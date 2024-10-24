import axios from "axios";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../store/reducers/user";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required')
  });

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-opacity-50 bg-white dark:bg-opacity-95 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Gallery</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setStatus, setSubmitting }) => {
            try {
              const response = await axios.post('http://localhost:4000/auth/login', values);
              if(response ){
                dispatch(logIn(response.data));
              };
              console.log('Response:', response);
              navigate('/');

              localStorage.setItem('token',response.data.token);
              localStorage.setItem('userEmail',values.email);
              
            } catch (error) {
              console.error('Error:', error);
              setStatus({ error: 'Login failed. Please try again.' });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, status }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your password"
                />
              </div>
              {status && status.error && (
                <div className="mb-4 text-red-500 text-sm">{status.error}</div>
              )}
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Logging in...' : 'Log in'}
              </button>
              <div className="mt-4 text-center">
                <p className="text-sm">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => navigate('/signup')}
                    className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-300 dark:hover:text-indigo-400"
                  >
                    Sign up
                  </button>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      </div>
    </>

  );
};

export default LoginPage;
