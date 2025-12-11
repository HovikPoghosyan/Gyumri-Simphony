import axios from "axios";

const API_BASE = '';
const URLS = {
};

const ajax = async ( url, { method = 'get', headers = {}, data = {} } ) => {
   try {
      const response = await axios({
         url,
         method,
         data,
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...headers,
         },
      });

      return response.data;
   } catch ( axiosError ) {
      console.error('AJAX Error:', axiosError );
      return {
         isFailed: true,
         errors: {
            message: axiosError?.response?.data?.message || axiosError.message || 'Unknown Error',
            list: axiosError?.response?.data?.errors ? { ...axiosError.response.data.errors } : null,
         },
      };
   }
};

export default ajax;
