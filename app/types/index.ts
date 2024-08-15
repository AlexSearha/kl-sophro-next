import { StaticImageData } from 'next/image';
import { Dispatch, SetStateAction } from 'react';

export interface CardProps {
  title: string;
  step: number;
  description: string;
  alt: string;
  staticImage?: StaticImageData;
  IconImage?: JSX.Element;
}

export interface PriceCardProps {
  title: string;
  price: number;
  description: string;
  alt: string;
  image: StaticImageData;
}

// Hooks Types Props
export interface FetchDataProps<T> {
  data: T | null;
  isLoading: Boolean;
  isError: Boolean;
}

export interface FetchLazyDataProps<T> {
  data: T | null;
  isLoading: Boolean;
  isError: Boolean;
  fetchData: (url: string) => Promise<void>;
}

export interface FetchLazyPostDataProps<T> {
  data: T | null;
  isLoading: Boolean;
  isError: Boolean;
  fetchData: (url: string, body: any) => Promise<void>;
}

export interface FormValue {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

export interface LoginFormResponse {
  accessToken: string;
  user: UserProps;
}

interface UserProps {
  id: number;
  firstname: string;
  lastname: string;
  student: boolean;
  address: string | null;
  photo: string | null;
  phone_number: string;
  newsletter: boolean;
  notifications: boolean;
  email: string;
  role: string;
}

// Card rendez-vous Props

export type ClientListItemProps = {
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
  id: number;
};

export type CalendareElementProps = {
  setDateValue: Dispatch<SetStateAction<Date | null | undefined>>;
};

// ADMIN Client list
export type ClientProps = {
  id: number;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
};

export type ClientDossierProps = {
  id: number;
  lastName: string;
  firstName: string;
  protocol: string;
};

// Providers
export type adminReducerInitialValuesProps = {
  openModal: boolean;
};

export type PaginateProps = {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

// --------------------------------------------- //
// ---------------ADDRESS API------------------- //
// --------------------------------------------- //

export type ApiAdressRoot = {
  features: FeatureAddress[];
};

export type FeatureAddress = {
  geometry: GeometryAddress;
  properties: PropertiesAddress;
};

export type GeometryAddress = {
  type: string;
  coordinates: number[];
};

export type PropertiesAddress = {
  label: string;
  score: number;
  housenumber: string;
  id: string;
  name: string;
  postcode: string;
  citycode: string;
  x: number;
  y: number;
  city: string;
  district: string;
  context: string;
  type: string;
  importance: number;
  street: string;
};

export type Filters = {
  type: string;
};
