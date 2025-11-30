import { AppPlatforms, Breakpoints, Orientation } from '@/constants/enums';
import { IEmail } from './api';

export interface IPageProps {
  isMobile: boolean;
  currentPlatform: AppPlatforms;
}

export interface IProjectLink {
  title: string;
  url: string;
  platform: AppPlatforms;
  isMobile?: boolean;
}

export interface IProject {
  title: string;
  slug: string;
  description: string;
  image: string;
  portfolio: string[];
  settings: Record<Breakpoints, string>;
  orientation: Orientation;
  links?: IProjectLink[];
}

export interface ISocial {
  id: string;
  title: string;
  icon: string;
  url: string;
}

export type IContactForm = IEmail;

export interface IContactFromResponse {
  ok: boolean | null;
  data?: string | null;
  errors?: IContactFormErrors;
}

export interface IContactFormErrors {
  [field: string]: string | undefined;
}

export interface IValidator<I, O> {
  validate: (field: I) => Promise<boolean> | boolean;
  getErrors: () => O;
}

export interface IField<T> {
  [key: string]: T;
}

interface IRange {
  min: unknown;
  max: unknown;
}

export interface INumericRange extends IRange {
  min: number;
  max: number;
}

export interface IStringRange extends IRange {
  min: string;
  max: string;
}

export interface PositionStyle {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}
