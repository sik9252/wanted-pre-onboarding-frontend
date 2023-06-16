import { useEffect } from "react";
import axios from "axios";
import { useAxios } from "./useAxios";

export const useAxiosInterceptor = () => {
  const requestInterceptor = useAxios.interceptors.request.use(
    async function (config) {
      const access_token = localStorage.getItem("access_token");

      if (!access_token) {
        return config;
      }

      try {
        config.headers.Authorization = `Bearer ${localStorage.getItem(
          "access_token"
        )}`;
      } catch (error) {
        alert(error.response.data.message);
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
      const {
        response: { statusCode },
      } = error;

      if (statusCode === 401) {
        window.location.href = "/";
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
