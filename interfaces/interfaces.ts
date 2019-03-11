
export interface DownloadLinks {
    googlePlay: string;
    appStore: string;
    mobileGooglePlay: string;
    mobileAppStore: string;
    facebook?: string;
    website?: string;
}

export interface ContactFormInterface {
    name: string;
    email: string;
    message: string;
}

export interface ContactFormErrorsInterface {
    name?: string;
    email?: string;
    message?: string;
}

export interface ValidatorInterface {
    validate: (data: any) => boolean;
    getErrors: () => ContactFormErrorsInterface;
}
