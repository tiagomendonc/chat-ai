import { FormError, FormField } from '../../types/FormError';

export const validateEmail = (email: string): FormError | void => {
  if (!email.length) {
    return {
      field: FormField.EMAIL,
      message: 'Email is required',
    };
  }

  if (!email.includes('@')) {
    return {
      field: FormField.EMAIL,
      message: 'Invalid email',
    };
  }
};
