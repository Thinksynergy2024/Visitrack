import React from "react";

const Dashboard = () => {
  return (
    <>
      <h1 className="text-primary text-sm font-bold mb-2">Key Metrics</h1>
      <section className="grid grid-cols-3">
        <div className="text-white max-w-xs my-auto bg-gradient-to-r from-gradientFrom to-gradientTo p-4 py-5 px-5 rounded">
          <div className="flex justify-between">
            <div>
              <h2> Main Balance </h2>
              <p className="text-2xl font-bold"> $500,000 </p>
            </div>
            <div className="flex items-center ">
              <div className="p-5 bg-gray bg-opacity-40 rounded-full"></div>
              <div className="p-5 bg-gray bg-opacity-30 rounded-full -ml-4"></div>
            </div>
          </div>
          <div className="mt-5 flex justify-between items-center w-52">
            <span className="text-lg"> * * * * </span>
            <span className="text-lg"> * * * * </span>
            <span className="text-lg"> * * * * </span>
            <span> 1234 </span>
          </div>
          <div className="flex justify-between mt-5 w-48 ">
            <div>
              <h3 className="text-xs"> Valid Thru </h3>
              <p className="font-bold"> 10/21 </p>
            </div>
            <div>
              <h3 className="text-xs"> Card Holder </h3>
              <p className="font-bold"> Esther E. </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
