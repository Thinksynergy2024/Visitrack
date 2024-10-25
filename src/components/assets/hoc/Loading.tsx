import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <section className="bg-background flex items-center justify-center h-[80vh]">
      <div className="flex flex-col items-center">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#40189D"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
        />
        <h1 className="text-sm">Please wait...</h1>
      </div>
    </section>
  );
};

export default Loading;
