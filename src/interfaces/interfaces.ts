export interface DownloadLinks {
  googlePlay: string;
  appStore: string;
  mobileGooglePlay: string;
  mobileAppStore: string;
  facebook?: string;
  website?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export enum ContactFormFields {
  name = 'name',
  email = 'string',
  message = 'string',
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface Validator {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate: (data: any) => boolean;
  getErrors: () => {};
}
