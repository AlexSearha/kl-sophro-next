import { StaticImageData } from "next/image";

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