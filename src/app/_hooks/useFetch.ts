import axios, { AxiosRequestConfig } from "axios";
import { sign } from "crypto";
import { useEffect, useState } from "react";
import { SignatureKind } from "typescript";

const useFetch = (url: string, method: string, headers: any, body: any) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    const abortController = new AbortController();
    const options: Pick<AxiosRequestConfig, "url" | "method" | "signal"> = {
      url: url,
      method: "GET",
      signal: abortController.signal,
    };

    async () => {
      const fetchData = await axios(options);
      setData(fetchData.data);
    };
    return () => {
      abortController.abort();
    };
  });
};
