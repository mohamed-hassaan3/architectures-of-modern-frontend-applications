"use client";
import geolocationAPI from "@/lib/axios/geolocationAPI";
import { useEffect, useState } from "react";

type Location = {
  city: string;
  lat: number;
  lon: number;
};
const useGeolocation = () => {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    getLocation();
  }, []);
  async function getLocation() {
    const response = await geolocationAPI("/");
    if (response.status === 200) setLocation(response.data);
  }
  return {
    city: location?.city,
    lat: location?.lat,
    lon: location?.lon,
  };
};

export default useGeolocation;
