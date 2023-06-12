import { useEffect } from "react";
import axios from "axios";
import { useAxios } from "./useAxios";

export const useAxiosInterceptor = () => {
  const requestInterceptor = useAxios.interceptors.request.use(
    async function (config) {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        config.headers.Authorization = `Bearer ${localStorage.getItem(
          "accessToken"
        )}`;
      } else {
        window.location.href = "/signin";
      }

      return config;
    },

    function (error) {
      return Promise.reject(error);
    }
  );

  const responseInterceptor = axios.interceptors.response.use(
    (response) => {
      return response;
    },

    async (error) => {
      if (error) {
        window.location.href = "/signin";
        localStorage.removeItem("accessToken");
      }

      return Promise.reject(error);
    }
  );

  useEffect(() => {
    return () => {
      useAxios.interceptors.request.eject(requestInterceptor);
      useAxios.interceptors.response.eject(responseInterceptor);
    };
  }, [requestInterceptor, responseInterceptor]);
};
