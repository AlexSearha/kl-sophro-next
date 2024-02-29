import { useEffect, useState } from "react";
import { FetchDataProps, FetchLazyDataProps } from "../types";

export const useFetchData = <T>(url: string) : FetchDataProps<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if(!url) return;
        const fetchData = async() => {
            setIsLoading(true);
            
            try {
                const response = await fetch(url, {
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${process.env.API_KEY}`,
                    }
                });
                const json = await response.json();
                setData(json);
            
            } catch (error) {
                setIsError(true);
                console.error(error);
            
            } finally {
                setIsLoading(false);
            
            }
        }
        fetchData();
    }, [url]);
    
    return { data, isLoading, isError };
};


export const useLazyFetchData = <T>(isApiKey: boolean | null) : FetchLazyDataProps<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchData = async (url: string) => {
        setIsLoading(true);
        
        try {
            const headers : Record<string, string> = {
                'content-type': 'application/json',
            };
            if(isApiKey){
                headers['Authorization'] = `Bearer ${process.env.API_KEY}`;
            }

            const response = await fetch(url, { headers });
            const json = await response.json();
            setData(json as T);
            
        } catch (error) {
            setIsError(true);
            console.error(error);

        } finally {
            setIsLoading(false);

        }
    };

    return { data, isLoading, isError, fetchData };
};
