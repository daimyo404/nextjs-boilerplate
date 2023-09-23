import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url: string, method: string, headers: any, body: any) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    async () => {
      const fetchData = await axios(url);
      setData(fetchData.data);
    };
  });
};
