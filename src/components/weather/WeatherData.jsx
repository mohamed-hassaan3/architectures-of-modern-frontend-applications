"use client";
import useGeolocation from "@/hooks/useGeolocation";
import weatherAPI from "@/lib/axios/weatherAPI";
import { useEffect, useState } from "react";

const WeatherData = () => {
  const { city } = useGeolocation();
  const [loction, setLocation] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getLocation = async () => {
      if (city) {
        try {
          const response = await weatherAPI(
            `/current.json?q=${city}&key=${process.env.NEXT_PUBLIC_HERO_API_KEY}`
          );
          const data = response.data;
          setLocation(data);
          setIsLoading(false);
          return data;
        } catch (e) {
          console.error(e);
          setError(e.message);
          setIsLoading(false);
        }
      }
    };

    getLocation();
  }, [city]);

  return (
    <div className="border h-[200] w-[90%] m-auto p-2 space-y-3">
      <h3 className="font-semibold underline text-center underline-offset-6">
        Weather Component
      </h3>
      <div className={error && "text-red-500"}>
        {isLoading ? (
          <p className="flex inset-0">Loading...</p>
        ) : error ? (
          error
        ) : loction ? (
          <p>City: {loction.location.name}</p>
        ) : (
          "Something went wrong"
        )}
      </div>
    </div>
  );
};

export default WeatherData;
