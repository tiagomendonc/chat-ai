export enum FormField {
  EMAIL = 'EMAIL',
  PASSWORD = 'PASSWORD',
}

export type FormError = {
  field: FormField;
  message: string;
};
