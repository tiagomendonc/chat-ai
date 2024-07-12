import { login } from '../store/authSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormError, FormField } from '../types/FormError';
import { validateEmail } from '../utils/validators/email';
import { validatePassword } from '../utils/validators/password';

function Login() {
  const [errors, setErrors] = useState<FormError[] | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = () => {
    const inputErros: FormError[] = [];

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError) {
      inputErros.push(emailError);
    }
    if (passwordError) {
      inputErros.push(passwordError);
    }

    if (inputErros.length) {
      setErrors(inputErros);
      return;
    }

    const userData = email;
    dispatch(login(userData));
    navigate('/');
  };

  const emailError = errors?.find((error) => error.field === FormField.EMAIL);
  const passwordError = errors?.find(
    (error) => error.field === FormField.PASSWORD
  );

  const getInputClasses = (input: FormField) => {
    const error = {
      [FormField.EMAIL]: emailError,
      [FormField.PASSWORD]: passwordError,
    };

    const inputClasses = `rounded-md p-1 border-2 outline-none focus:bg-slate-50`;
    const focusBorderClass = error[input]
      ? 'focus:border-red-400'
      : 'focus:border-cyan-400';
    const borderClass = error[input] ? 'border-red-400' : '';
    return `${inputClasses} ${focusBorderClass} ${borderClass}`;
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 from-10% via-indigo-500 via-50% to-sky-500 to-100%">
      <div className="flex shadow-2xl">
        <div className="flex flex-col items-center justify-center text-center p-20 gap-8 bg-white rounded-2xl">
          <h1 className="text-5xl font-medium">Welcome</h1>
          <div className={`flex flex-col text-2xl text-left gap-1`}>
            <span>Email</span>
            <input
              type="text"
              className={getInputClasses(FormField.EMAIL)}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={!emailError ? '' : emailError?.message}
            />
          </div>
          <div className="flex flex-col text-2xl text-left gap-1">
            <span>Password</span>
            <input
              type="password"
              className={getInputClasses(FormField.PASSWORD)}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={!passwordError ? '' : passwordError?.message}
            />
            <div className="flex gap-1 items-center">
              <input type="checkbox" />
              <span className="text-base">Remember Password</span>
            </div>
          </div>
          <button
            className="px-10 py-2 text-2xl rounded-md bg-gradient-to-tr from-green-400 to-blue-500 hover:from-blue-500 hover:to-blue-800 text-white"
            onClick={() => submitForm()}
          >
            Login
          </button>
          <p className="font-semibold">
            Don't have an account?
            <a href="#" className="text-blue-400 hover:underline ml-2">
              Register
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
