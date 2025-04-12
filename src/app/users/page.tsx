import Users from "@/modules/Users";
import React from "react";

const page = () => {
  return (
    <section>
      <h1 className="text-center my-4 text-2xl text-gray-400">
        Server Side Render
      </h1>
      <Users />
    </section>
  );
};

export default page;
