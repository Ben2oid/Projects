import axios from "axios";
import { useGeoLoc } from "./useGeoLoc";
import { useEffect, useState } from "react";

const id: string = `${import.meta.env.VITE_MY_API_KEY}`;

export const useAxios = (value: string) => {
  const [currentData, setCurrentData] = useState(null);
  const crd = useGeoLoc();

  async function getUser() {
    try {
      const response: any = await axios.get(
        `https://api.weatherapi.com/v1/${value}.json?key=${id}&q=${crd.latitude},${crd.longitude}&days=6&aqi=no&alerts=no`
      );
      setCurrentData(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (crd) {
      getUser();
    }
  }, [crd]);

  return currentData;
};
