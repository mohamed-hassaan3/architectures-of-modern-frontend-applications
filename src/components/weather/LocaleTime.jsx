"use client"
import { useEffect, useState } from "react";

const LocaleTime = () => {
  const [localTime, setLocalTime] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setLocalTime(date);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="border h-[200] w-[90%] m-auto p-2 space-y-3">
      <h3 className="font-semibold underline text-center underline-offset-6">
        Locale Time Component
      </h3>
      <p>{localTime ? `Time: ${localTime.toLocaleTimeString()}` : "Loading..."}</p>
    </div>
  );
};

export default LocaleTime;
