import { useState } from "react";
import { toast } from "react-toastify";

type Params<T> = {
  promise: () => Promise<T>;
  successCb?: (data: T) => void;
  errorCb?: (error: any) => void;
};

type Result<T> = {
  loading: boolean;
  callApi: (params: Params<T>) => Promise<void>;
};

const useCallApi = <T,>(): Result<T> => {
  const [loading, setLoading] = useState(false);

  const callApi = async ({
    promise,
    successCb,
    errorCb,
  }: Params<T>): Promise<void> => {
    setLoading(true);
    try {
      const result = await promise();

      if (successCb) successCb(result);
    } catch (error) {
      if (errorCb) errorCb(error);
      // change based on endpoint error body
      toast.error("something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return { loading, callApi };
};

export default useCallApi;
