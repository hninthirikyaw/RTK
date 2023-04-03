import React from "react";
import { Loader } from "@mantine/core";

const Loading = () => {
  return (
    <div className=" flex justify-center h-screen items-center text-3xl">
      <Loader color="grape" variant="bars" />
    </div>
  );
};

export default Loading;
