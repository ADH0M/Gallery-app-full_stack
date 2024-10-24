import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "" , password:'' ,passwordConfirm:'',phone:'',whatsAppNumber:'',gender:'' }}
      validationSchema={Yup.object({
        name: Yup.string().required(" Name is Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[0-9]/, 'Password must contain at least one digit')
        .matches(/[@$!%*?&#]/, 'Password must contain at least one special character'),
        passwordConfirm: Yup.string()
        .required('confirm your password')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        phone:Yup.string().required("Phone is Required"),
        whatsAppNumber:Yup.string().required("Whats app number is Required"),
        gender:Yup.string().required("Gender is Required"),
      })}
      onSubmit={(values, { setSubmitting ,setStatus }) => {
        axios
          .post("http://localhost:4000/auth/signup", values)
          .then((response) => {
            setStatus({ action: true , message:response.data.data.user})
          })
          .catch((error) => {
            setStatus(error.response.data.message)
          })
          .finally(() => {
            setSubmitting(false);
            
          });
      }}
    >
      {({ isSubmitting , status }) => (
        <div className="min-h-screen flex items-center justify-center bg-white bg-opacity-50 dark:bg-opacity-95 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <Form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
            <Field
              type="text"
              name="name"
              placeholder="John Doe"
              id="name"
              className="w-full px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <Field
              type="email"
              name="email"
              placeholder="johnDoe@gmi.co"
              id="email"
              className="w-full px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="phone" className="block text-sm font-medium mb-2">Your Phone</label>
              <Field
                type="text"
                name="phone"
                placeholder="+201 123 4478 20"
                id="phone"
                className="w-full px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="w-1/2">
              <label htmlFor="whatsAppNumber" className="block text-sm font-medium mb-2">WhatsApp Number</label>
              <Field
                type="text"
                name="whatsAppNumber"
                placeholder="+201 657 1589 03"
                id="whatsAppNumber"
                className="w-full px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <ErrorMessage name="whatsAppNumber" component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
              <Field
                type="password"
                name="password"
                placeholder=". . . . . ."
                id="password"
                className="w-full px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="w-1/2">
              <label htmlFor="passwordConfirm" className="block text-sm font-medium mb-2">Confirm Password</label>
              <Field
                type="password"
                name="passwordConfirm"
                placeholder=". . . . . ."
                id="passwordConfirm"
                className="w-full px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <ErrorMessage name="passwordConfirm" component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </div>
          <div className="mb-4">
            <p className="block text-sm font-medium mb-2">Gender</p>
            <label htmlFor="male" className="mr-4">
              <Field type="radio" name="gender" id="male" value="male" className="mr-1" />
              Male
            </label>
            <label htmlFor="female">
              <Field type="radio" name="gender" id="female" value="female" className="mr-1" />
              Female
            </label>
            <ErrorMessage name="gender" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="mb-4">
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors"
            >
              Sign Up
            </button>
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-300 dark:hover:text-indigo-400">
                Log in
              </Link>
            </p>
          </div>
          {status && status.action === true ? (
            <div className="text-center text-green-500 mt-4">{status.message}</div>
          ) : (
            <div className="text-center text-red-500 mt-4">{status}</div>
          )}
        </Form>
      </div>
    </div>
      )}
    </Formik>
  );
};

export default SignupForm;
//Adh@m123