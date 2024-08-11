import { useEffect, useState } from 'react';
import { FetchDataProps, FetchLazyPostDataProps } from '../../types';
import { instannceApiBackend, instanceApiAddress } from '../axios-instances';

{
  /* TODO: Completer les hooks */
}
export const useGetFetchData = <T>(url: string): FetchDataProps<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await instannceApiBackend.get(url);
        setData(response.data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

export const usePostFetchData = <T>(url: string, body: any): FetchDataProps<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await instannceApiBackend.post(url, body, {
          headers: {
            'content-type': 'application/json',
          },
        });
        setData(response.data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

export const usePutFetchData = <T>(url: string, body: any): FetchDataProps<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await instannceApiBackend.put(url, body);
        setData(response.data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

export const useDeleteFetchData = <T>(url: string): FetchDataProps<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await instannceApiBackend.delete(url);
        setData(response.data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

// ------------------------------------------------------ //
// ------------------- Lazy Fetch Datas ----------------- //
// ------------------------------------------------------ //
interface FetchLazyDataProps<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  fetchData: ({ url, instance }: { url: string; instance: number }) => Promise<void>;
}

export const useLazyGetFetchData = <T>(): FetchLazyDataProps<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async ({ url, instance }: { url: string; instance: number }) => {
    setIsLoading(true);
    setIsSuccess(false);
    let instanceAxios = null;

    if (instance === 1) {
      instanceAxios = instannceApiBackend;
    } else if (instance === 2) {
      instanceAxios = instanceApiAddress;
    } else {
      setIsError(true);
      return;
    }

    try {
      const response = await instanceAxios.get(`?q=${url}&type=housenumber&autocomplete=1`);
      setIsSuccess(true);
      setData(response.data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, isError, isSuccess, fetchData };
};

export const useLazyPostFetchData = <T>(): FetchLazyPostDataProps<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async (url: string, body: any) => {
    setIsLoading(true);

    try {
      const response = await instannceApiBackend.post(url, body);
      setData(response.data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, isError, fetchData };
};

export const useLazyPutFetchData = <T>(body: any): FetchLazyDataProps<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async (url: string) => {
    setIsLoading(true);

    try {
      const response = await instannceApiBackend.put(url, body);
      setData(response.data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, isError, fetchData };
};

export const useLazyDeleteFetchData = <T>(): FetchLazyDataProps<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async (url: string) => {
    setIsLoading(true);

    try {
      const response = await instannceApiBackend.delete(url);
      setData(response.data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, isError, fetchData };
};
