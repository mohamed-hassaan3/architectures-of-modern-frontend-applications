import React from "react";
import CurrentWeather from "@/modules/Weather";

const page = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-center mt-16 text-2xl text-gray-400">
        Client Side Render
      </h1>
      <CurrentWeather />
    </section>
  );
};

export default page;
