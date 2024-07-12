import { FormField } from '../../types/FormError';

export const validatePassword = (password: string) => {
  if (!password.length) {
    return {
      field: FormField.PASSWORD,
      message: 'Password is required',
    };
  }
};
